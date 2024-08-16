import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Usman",
    };
    this.handleGreet = this.handleGreet.bind(this);
  }
  handleGreet(childName) {
    alert(`Hello ${this.state.message} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetParent={this.handleGreet} />
      </div>
    );
  }
}

export default ParentComponent;
