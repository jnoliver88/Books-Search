import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import NameForm from "./components/NameForm";


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Search />
      </div>
      <div className="App">
        <NameForm />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
