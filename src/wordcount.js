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
      this.placeholder = "1. Call family \n2. Finish Stripe Assignment \n"
      this.textInput = React.createRef();
    }
    
    handleKeypress(event) {
      console.log(event.target.value)
      this.setState({ value:event.target.value });
    }

    componentDidMount() {
      this.setValue(this.placeholder)
    }

    setValue(newValue){
      this.textInput.current.value = newValue
      this.state.value = newValue
    }

    _onFocus() {
      if(this.state.value == this.placeholder){
        this.setValue("1. ")
      }
    }

    _onBlur(){
      if(this.state.value == ""){
        this.setValue(this.placeholder)
      }
    }
    
    render(){
      let count = 0,
          length = this.state.value?this.state.value.length:0;
      return(
        <div>
          <textarea id="" 
            onChange={(event)=>this.handleKeypress(event)} 
            onFocus={this._onFocus} 
            onBlur={this._onBlur}
            ref={this.textInput}
          >
            {this.state.value}
          </textarea>
          <div>Count: {length}</div>
          <div>this.state.value: {this.state.value}</div>
        </div>
      );
    }
  }
  
  export default WordCount