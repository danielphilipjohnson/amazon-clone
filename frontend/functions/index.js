const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors")

const stripe = require('stripe')('sk_test_51HQAuMJeWABh5Sp3k4A5buZ8M47nwejTMkAo578NBkpa9BCI7nK2eF9NmZiVzWiVsfMWyazg5IYyYQ0YGM8kSP0C00ht0ytRCX');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-f6aa7/us-central1/api