import React from "react";

class Counter extends React.Component {
  /**
   * Instantiates a new Counter component to be rendered.
   * @param {Object} props An object of key value pairs where each KVP is
   *    an attribute value pair from the Component's JSX (html) tag, e.g.,
   *    <Counter prop1="one" prop2="two" />
   */
  constructor(props) {
    // Calls the parent React.Component constructor function so that this child
    // component can be supervised.
    super(props);
    console.log(props);

    // State is any data that changes in this component.
    this.state = {
      count: this.props.count || 0,
      clickTimes: []
    };
  }

  handleClick = () => {
    // Never mutate the state object directly.
    // Always update via this.setState because React.Component needs to supervise us.

    // This is mutating state directly, don't do it.
    // this.state.clickTimes.push(new Date());
    
    this.setState({
      count: this.state.count + 1,
      // Create a new array of all current clickTimes plus the new click time.
      clickTimes: [...this.state.clickTimes, new Date()]
    });
  }

  /**
   * Renders this component which may include state and / or prop data.
   * @returns {*} JSX to be rendered on the page.
   */
  render() {
    return <div>
      <h3>{this.state.count} - {this.props.subject}</h3>
      <button onClick={this.handleClick}>Increment</button>
      <ul>
        {
          this.state.clickTimes.map((date, i) => {
            return <li key={i}>{date.toString()}</li>
          })
        }
      </ul>
    </div>
  }
}

export default Counter;