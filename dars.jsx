import "../dars/dars.css";
import React from "react";


class Dars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "kimdir",
      
    };
  }
  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
      this.setState({ name: "Kimdir1" });
    };
    const minus = () => {
      this.setState({ count: (this.state.count - 1) });
    };
    const reset = () => {
      this.setState({ count: (this.state.count = 0) });
    };

    return (
      <div className="car">
        <h2>{this.props.name}</h2>
        <p>{this.props.desc}</p>
        <h1>Count {this.state.count}</h1>
        <h1>name:{this.state.name}</h1>
        <h1>nol:{this.state.nol}</h1>

        <button onClick={increment}>click +</button>
        <button onClick={minus}>click -</button>
        <button onClick={reset}>clear</button>
      </div>
    );
  }
}

export default Dars;
