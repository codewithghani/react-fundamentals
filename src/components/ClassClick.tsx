import { Component } from "react";

class ClassClick extends Component {
  handleClick() {
    console.log("zara zara was clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button">
          Click Me --- Zara Zara Click me
        </button>
      </div>
    );
  }
}

export default ClassClick;
