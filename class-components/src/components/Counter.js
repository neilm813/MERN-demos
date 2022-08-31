import { Component } from 'react';

// Named export which will be imported like:
// import { Counter } from 'folder/file.js'
export class Counter extends Component {
  constructor(props) {
    console.log(props);

    /* 
    props are passed in from the parent as 'attributes' on the component's
    tag, just like 'id' attribute and others.
    */
    super(props);

    const { start = 0 } = this.props;

    this.state = {
      count: start,
      clickTimes: [],
    };
  }

  handleClickCount = () => {
    /* 
    DO NOT MUTATE STATE DIRECTLY: this.state.count++
    
    pass in a newly created object.

    Mutating state directly bypasses reacts official way to update state
    and so can cause unintended side-effects.
    */

    const { count, clickTimes } = this.state;
    const { step = 1 } = this.props;

    this.setState({
      count: count + step,
      // Don't .push because it mutates, make a copy & add new item to new array
      clickTimes: [...clickTimes, new Date()],
    });
  };

  render() {
    const { props, state, handleClickCount } = this;
    const { title } = props;
    const { count, clickTimes } = state;

    return (
      <div
        style={{
          border: '1px solid black',
          padding: '2rem',
          marginBottom: '1rem',
        }}
      >
        <h4>{title}</h4>
        <button onClick={handleClickCount}>{count}</button>

        <ul>
          {clickTimes.map((date, i) => {
            return <li key={i}>{date.toString()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// default export which will be imported like:
// import WhateverYouWantToCallIt from 'folder/file.js'
export default Counter;
