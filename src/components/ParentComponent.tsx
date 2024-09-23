import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      message: "Usman",
    };
    this.handleGreet = this.handleGreet.bind(this);
  }
  handleGreet(childName: string) {
    alert(`Hello from ${childName}`);
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
