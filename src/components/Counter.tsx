import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  handleDecrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleIncrement()}>+</button>
        <h2>Counter Value - {this.state.count}</h2>
        <button onClick={() => this.handleDecrement()}>-</button>
      </div>
    );
  }
}

export default Counter;
