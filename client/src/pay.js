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
  

const promise = loadStripe("pk_test_51I372nGyILkQZmBXOd36LRf9VJxghrtgg6GfJeVKxHKdiidKe3jBtsN21usqRH5mjAahbdF5tDxv0vootoz5gjjK007pATtbqi");

export default function Pay(props){
    let location = useLocation();
    if(location.state.value){
        return <Elements stripe={promise}><CheckoutForm submittedText={location.state.value}/></Elements>
    }
    else{
        return <p>No text inputted!</p>
    }
}

// export default class Pay extends React.Component {

//     constructor(props) {
//         super(props);
//         let location = useLocation();
//         console.log(location)
//     }

//     componentDidMount(){
//         console.log(this.props)
//     }

//     render(){
//         return (
//             <Elements stripe={promise}>
//                 <CheckoutForm />
//             </Elements>
//         )
//     }
// }