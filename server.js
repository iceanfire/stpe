const express = require('express');
const app = express();
const stripe = require("stripe")("sk_test_51I372nGyILkQZmBXEXqsJUfyUSx7GQD6z8DxI4CPr0XXDfBgFkfoeGJZW2J4C0loxzhIMtMjI4UrnMlolwqtiDOW00Et0YqM7M");
const port = process.env.PORT || 3001;
app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = submittedText => {
  const lineCount = submittedText?submittedText.split("\n").length:0;
  const pricePerLine = 1.25
  return pricePerLine * lineCount * 100
};

app.post("/create-payment-intent", async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  const submittedText = req.body.submittedText;
  console.log(calculateOrderAmount(submittedText));
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(submittedText),
    currency: "gbp"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
