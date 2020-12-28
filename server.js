const express = require('express');
const app = express();
const stripe = require("stripe")("sk_test_51AyKzMF92xb4ns3iIVmK8armZAK60y2D2Oo2fgpObs25Qnbu7qmpPx70gDRurFGAViaxqalYCS8QtEfXRztOWF3H009x4mEvIC");
const port = process.env.PORT || 3001;
app.use(express.static("."));
app.use(express.json());

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

const os = require("os");
const fs = require('fs');
const addNewLine = (text) => {     
  fs.open('payments.log', 'a', 666, (e, id) => {
    fs.write(id, `${text}${os.EOL}`, null, 'utf8', () => {
      fs.close(id, () => {
       console.log('file is updated');
      });
    });
  });
}

const calculateOrderAmount = submittedText => {
  const lineCount = submittedText?submittedText.split("\n").filter(function(x){return x!=""}).length:0;
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


// Match the raw body to content type application/json
app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  let event;
  event = request.body

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      addNewLine(`${event.data.object.id}, ${event.data.object.amount}, ${event.data.object.currency}, ${event.data.object.receipt_email}`)
      console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.json({received: true});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
