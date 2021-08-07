/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51J8314BRKotOAzudTGloTAfjJCS2bCchY6B7Z2ZdPQY1f7MOaUo8poqy3OuenDQXikfD71Zup4gDjsPi8d3a2k8U00TXfaiaqr",
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // subunits of the currency
    currency: "EUR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/fir-34a4c/us-central1/api
