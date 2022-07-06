import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    // Call the parent React.Component constructor and pass it this
    // component's props so the parent is aware of what it's child is doing.
    super(props);

    this.state = {
      count: this.props.start || 0,
    };
  }

  handleCountClick = () => {
    // DON'T MUTATE STATE DIRECTLY, make a copy and edit the copy.
    const newState = { ...this.state };
    const incrementAmount = this.props.amount || 1;
    newState.count += incrementAmount;

    // setState WILL NOT RERENDER unless given a NEW object.
    this.setState(newState);
  };

  render() {
    console.log('state:', this.state, 'props:', this.props);

    return (
      <button onClick={this.handleCountClick}>
        {this.props.label} {this.state.count}
      </button>
    );
  }
}

/*
export default Counter;

Above syntax means you import it like: 
import ChooseAName from './components/Counter';
You can rename it when importing it.

export class Counter or export const ...
Above syntax means you import it like:
import { Counter } from './components/Counter';
You MUST refer to the name now.
*/
