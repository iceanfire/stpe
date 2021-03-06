import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";


export default class WordCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value : null,
        cost: 0.0,
        email: null
      }
      this.handleKeypress = this.handleKeypress.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onBlur = this._onBlur.bind(this);
      this.setValue = this.setValue.bind(this);
      this.startPayment = this.startPayment.bind(this);
      this.calculateLineCount = this.calculateLineCount.bind(this);

      this.placeholder = "1. Call family \n2. Finish Stripe Assignment \n";
      this.startValue = "1. ";
      this.textInput = React.createRef();
      this.costPerLine = 1.25;
    }
    
    handleKeypress(event) {
      this.setState({ value:event.target.value });
    }

    componentDidMount() {
      this.textInput.current.placeholder = this.placeholder


      function parseJSON(response) {
        return response.json();
      }
    }

    setValue(newValue){
      this.textInput.current.value = newValue
      this.state.value = newValue
    }

    _onFocus() {
      if(!this.state.value){
        this.setValue(this.startValue);
      }
    }

    _onBlur() {
      if(this.state.value == this.startValue){
        this.setValue("")
      }
    }

    calculateLineCount(text) {
      return text?text.split("\n").filter(function(x){return x!=""}).length:0;
    }

    startPayment(){
      if(!this.state.value || this.state.value == ""){
        alert("You haven't added any items!")
      }
    }

    render(){
      let count = 0,
          lineCount = this.state.value?this.calculateLineCount(this.state.value):0,
          totalCost = lineCount * this.costPerLine
      this.state.cost = totalCost;
      return(
        <div>
          <textarea 
            id="itemsList" 
            onChange={(event)=>this.handleKeypress(event)} 
            onFocus={this._onFocus} 
            onBlur={this._onBlur}
            ref={this.textInput}
          >
            {this.state.value}
          </textarea>
          <div id="pricing">
            <p>Number of Items: {lineCount}</p>
            <p>Cost Per Item: £{this.costPerLine}</p>
            <p id="total">Total Cost: £{totalCost}</p>
            
          </div>
          <Link to={{
            pathname: "/pay",
            state: this.state
          }}>
            <button type="button" id="orderButton" onClick={this.startPayment}>Order Now for £{totalCost}!</button>
          </Link>
          
        </div>
      );
    }
  }