Stripe PM Take Home Project by Hadi Laasi
=========================================


Context
-------
My background is as a python dev + learning some swift + swiftUI at the moment.
However, when I got asked to do this assignemnt, I thought I'd try a new stack 
and picked up React/Node.js/Express for the first time.

The project that I've built is a joke startup idea where you can submit a list 
of your tasks and a PM would create a roadmap for your life! I'd like to 
apologise for the code base being incredibly hacky/rough -- it's my first time
building a react app, so here goes nothing!


Instructions to Run
===================

1. git clone https://github.com/iceanfire/stpe.git
2. Go to the main directory (stpe) and run: npm install (this installs the node.js server)
3. cd client
4. npm install (this installs the react pre-requisites)
5. node server.js (this starts the backend server on port 3001)
6. npm start (this starts the react app on http://localhost:3000)

Instructions to Use
===================
1. Take a look at the "example_usage.mov" for the desired flow
2. To replicate it yourself, once everything is running, open up http://localhost:3000
3. Enter a list of items into the text area and click on "Order now for £XX"
4. Add your email address and a test-case from https://stripe.com/docs/payments/accept-a-payment?integration=elements
5. To test out the webhook functionality please use: stripe listen --forward-to http://localhost:3001/webhook


Friction Log
============
Please see my detailed friction log here: 
https://docs.google.com/spreadsheets/d/1x4BvxBNcV-HGiFZy3fdb9ekHFctmOQc9TE172hsv3vY/edit?usp=sharing

Contact Me
==========
If you're having trouble running this, please do feel free to contact me: hadi.laasi <at> gmail.com

Thank You!
