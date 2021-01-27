import React from "react";
import User from "./components/User/user";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageJohn: 42,
      ageJane: 36,
    }

    this.makeJohnOlder = this.makeJohnOlder.bind(this);
  }

  makeJohnOlder() {
    this.setState({ageJohn: this.state.ageJohn + 1});
  }

  makeJaneOlder = () => {
    this.setState({ageJane: this.state.ageJane + 1 });
  }

  render() {
    const {ageJohn, ageJane} = this.state;

    let olderUser;
    if (ageJohn > ageJane) {
      // mon utilisateur le plus vieux c'est John
      olderUser = "John";
    } else {
      // mon utilisateur le plus vieux c'est Jane
      olderUser = "Jane";
    }

    return (
      <div>
        <h1>Hello World</h1>
        <h2>{olderUser} est le plus vieux</h2>
        <User name={"John"} age={ageJohn} color={"white"} makeOlder={this.makeJohnOlder}/>
        <User name={"Jane"} age={ageJane} color={"grey"} makeOlder={this.makeJaneOlder}/>
        <User name={"Adama"} age={ageJane} color={"grey"} makeOlder={this.makeJaneOlder}/>
        <User name={"Xavier"} age={ageJane} color={"grey"} makeOlder={this.makeJaneOlder}/>
        <User name={"Ines"} age={ageJane} color={"grey"} makeOlder={this.makeJaneOlder}/>
        <User name={"Jane"} age={ageJane} color={"grey"} makeOlder={this.makeJaneOlder}/>
      </div>
    );
  }
}

// module.export = 
export default App;
