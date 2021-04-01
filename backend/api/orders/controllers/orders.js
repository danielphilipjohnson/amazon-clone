"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const stripe = require("stripe")(
  "sk_test_51IbRJaF25eMJVCu4PSP1NLfuqFJ02mJ8SW1ofeENMUJ3GobfANwokUlQJkTCYMrTxwlAKVXLaioXeWBEtly7lTjo00wPlRnnvl"
);

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  setUpStripe: async (ctx) => {
    const { basket } = ctx.request.body;

    let total = 100;
    let validatedCart = [];
    let receiptCart = [];

    await Promise.all(
      basket.map(async (product) => {
        const validatedProduct = await strapi.services.products.findOne({
          id: product.id,
        });

        if (validatedProduct) {
          // validatedProduct.qty = product.qty
          // in future make it qty
          validatedCart.push(validatedProduct);
          receiptCart.push({ id: product.id });
        }

        return validatedProduct;
      })
    );

    total = strapi.config.functions["index"].cartTotal(validatedCart);

    console.log(total);

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100, // subunits of the currency
        currency: "usd",
      });

      return paymentIntent;
    } catch (error) {
      throw error;
    }
  },
  create: async (ctx) => {
    const { basket, paymentIntent, shippingAddress } = ctx.request.body;

    console.log(paymentIntent);
    // payment intent validation
    if (paymentIntent) {
      // need to check for duplicate purchases here
      try {
        const paymentInfo = await stripe.paymentIntents.retrieve(
          paymentIntent.id
        );
        if (paymentIntent.status !== "succeeded") {
          throw { message: "You still have to pay" };
        } else {
          console.log(paymentIntent.status);
        }
      } catch (err) {
        console.log(err);
        ctx.response.status = 402;
        return { error: err.message };
      }

      // Does paymentIntent already exist
      const orderAlreadyExists = await strapi.services.orders.find({
        order_identifier: paymentIntent.id,
      });

      if (orderAlreadyExists && orderAlreadyExists.length > 0) {
        ctx.response.status = 402;
        return { error: "This order was already made" };
      }

      let santisedCart = [];

      await Promise.all(
        basket.map(async (product) => {
          const foundProduct = await strapi.services.products.findOne({
            id: product.id,
          });

          if (foundProduct) {
            // foundProduct.qty = product.qty
            // in future make it qty
            santisedCart.push(foundProduct);
          }

          return foundProduct;
        })
      );

      const total = strapi.config.functions["index"].cartTotal(santisedCart);
      const santiseTotal = strapi.config.functions[
        "index"
      ].convertTotalToStripe(total);

      // find a user later add logged in user credentials
      const getUser = await strapi
        .query("user", "users-permissions")
        .findOne({ id: 1 }, ["role"]);

      const address = await strapi.services.address.create({
        shipping_address: "84 Raccoon Run",
        shipping_state: "Washington",
        shipping_country: "US",
        shipping_zip: "98106",
      });
      const x = JSON.stringify(santisedCart);
      console.log(santisedCart);
      const entry = {
        products: santisedCart,
        order_total: total,
        order_placed: Date.now(),
        order_identifier: paymentIntent.id,
        user: getUser,
        address,
      };
      // create the order
      const entity = await strapi.services.orders.create(entry);

      // return success and continue
      return sanitizeEntity(entity, { model: strapi.models.orders });
    } else {
      throw new Error("no payment intent");
    }
  },
};
