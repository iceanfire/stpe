import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./stripe.css";


import {
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";
  

const promise = loadStripe("pk_test_1Skzidh8Ur8EKR7rqMWMXyDv");

export default function Pay(props){
    let location = useLocation();
    if(location.state.value){
        return <Elements stripe={promise}><CheckoutForm submittedText={location.state.value} cost={location.state.cost}/></Elements>
    }
    else{
        return <p>No text inputted!</p>
    }
}