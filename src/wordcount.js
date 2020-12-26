import React, { Component } from 'react';


class WordCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value : null
      }
      this.handleKeypress = this.handleKeypress.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onBlur = this._onBlur.bind(this);
      this.setValue = this.setValue.bind(this);
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
      return text?text.split("\n").length:0;
    }

    render(){
      let count = 0,
          lineCount = this.state.value?this.calculateLineCount(this.state.value):0,
          totalCost = lineCount * this.costPerLine
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
            <p>Total Cost: £{totalCost}</p>
          </div>
        </div>
      );
    }
  }
  
  export default WordCount