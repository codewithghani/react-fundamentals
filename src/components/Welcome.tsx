import { Component, ReactNode } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  handleClick() {
    this.setState({
      message: "Thank You for subscription",
    });
  }
  render(): ReactNode {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button type="button" onClick={() => this.handleClick()}>
          Subscribe
        </button>
      </>
    );
  }
}

export default Welcome;
