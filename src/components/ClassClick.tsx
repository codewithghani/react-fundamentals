import { Component } from "react";

class ClassClick extends Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      message: "Hello World",
    };
    // this.handleClick = this.handleClick.bind(this); binding in the constructor
  }

  handleClick = () => {
    this.setState({
      message: "Thank You for Subscription",
    });
    // checking this
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.handleClick.bind(this)} type="button">   binding inside the return statement ... for heavy applications, this binding method is not recommended */}
        {/* <button onClick={() => this.handleClick()} type="button"> using arrow function to bind this  */}
        <button onClick={this.handleClick} type="button">
          Subscribe
        </button>
      </div>
    );
  }
}

export default ClassClick;
