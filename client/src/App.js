import React, { Component } from "react"
import "./App.css"
import Navbar from './component/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
          </Router>


          <h1>(React) Google Books Search</h1>
          <h3>Search for and Save Books of Interest</h3>
        </header>
      </div>
    );
  }
}

export default App;
