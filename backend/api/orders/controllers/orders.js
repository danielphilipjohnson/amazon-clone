"use strict";

// move out
const stripe = require("stripe")(
  "sk_test_51IbRJaF25eMJVCu4PSP1NLfuqFJ02mJ8SW1ofeENMUJ3GobfANwokUlQJkTCYMrTxwlAKVXLaioXeWBEtly7lTjo00wPlRnnvl"
);

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  setUpStripe: async (ctx) => {
    const { basket } = ctx.request.body;

    let total = 0;
    let validatedCart = [];
    // later make a receipt with pdf
    let receiptCart = [];

    await Promise.all(
      basket.map(async (product) => {
        // find the cart items from the basket and find the prices on the backend
        const validatedProduct = await strapi.services.products.findOne({
          id: product.id,
        });

        if (validatedProduct) {
          validatedProduct.quantity = product.quantity;
          validatedCart.push(validatedProduct);
          receiptCart.push({ id: product.id });
        }

        return validatedProduct;
      })
    );

    total = strapi.config.functions["index"].cartTotal(validatedCart);

    const santiseTotal = strapi.config.functions["index"].convertTotalToStripe(
      total
    );

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(santiseTotal), // subunits of the currency
        currency: "usd",
      });

      return paymentIntent;
    } catch (error) {
      throw error;
    }
  },

  create: async (ctx) => {
    const { basket, paymentIntent, shippingAddress, user } = ctx.request.body;

    // work on finding the user in the backend
    console.log(user);

    // payment intent validation
    if (paymentIntent) {
      // need to check for duplicate purchases hereurl
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
      let cartItems = [];

      await Promise.all(
        basket.map(async (product) => {
          const foundProduct = await strapi.services.products.findOne({
            id: product.id,
          });

          if (foundProduct) {
            const entity = await strapi.services["cart-item"].create({
              title: foundProduct.title,
              image: foundProduct.image.url,
              quantity: product.quantity,
            });

            sanitizeEntity(entity, { model: strapi.models["cart-item"] });

            foundProduct.quantity = product.quantity;
            santisedCart.push(foundProduct);

            cartItems.push(entity);
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
        shipping_address: shippingAddress.shipping_address,
        shipping_state: shippingAddress.shipping_state,
        shipping_country: shippingAddress.shipping_country,
        shipping_zip: shippingAddress.shipping_zip,
      });

      console.log(santisedCart);

      const entry = {
        cart_items: cartItems,
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
