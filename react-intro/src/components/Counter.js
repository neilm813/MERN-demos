import React from 'react';

// Named export which will be imported like:
// import { Counter } from 'folder/file.js'
export class Counter extends React.Component {
  // props are passed in from the parent as attributes on the component's tag, just like an id attribute
  constructor(props) {
    // call the parent constructive and pass it Counter's props
    super(props);

    console.log('Counter props:', props);

    // Must be called `state` to keep track of component data that could
    // change and needs to be re-displayed.
    this.state = {
      // If start is not provided use 0
      count: this.props.counter.start || 0,
    };
  }

  handleCount = (increase = true) => {
    /* 
    DO NOT MUTATE this.state directly, for example: this.state.count++

    You must call setSate so react knows you are updating it so react can react and re-render the page with the new
    state.
    */

    // If step is not passed in, use 1, otherwise use the provided amount.
    const incrementAmount = this.props.counter.step === undefined ? 1 : this.props.counter.step;

    this.setState({
      count: increase === true ? this.state.count + incrementAmount : this.state.count - incrementAmount,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  // class method, named render because react expects a method called render that it can
  // use to render the HTML for our component
  render() {
    return (
      <div style={{ border: `2px solid ${this.props.counter.color || 'lightblue'}`, padding: 5 }}>
        <h2>{this.props.counter.title}</h2>
        <h3>{this.state.count}</h3>

        <button
          onClick={(e) => {
            this.handleCount();
          }}
        >
          Increase
        </button>

        <button
          onClick={(e) => {
            this.handleCount(false);
          }}
        >
          Decrease
        </button>

        <button
          onClick={(e) => {
            this.handleReset();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

// default export which will be imported like:
// import WhateverYouWantToCallIt from 'folder/file.js'
export default Counter;
