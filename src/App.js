import React, { Component } from "react";
import logo from "./CNB.png";
import "./App.css";
import TableExampleSimple from "./Components/Table";
import DatePickerExampleSimple from "./Components/Datepicker";
import FlatButtonExampleSimple from "./Components/Button";

class App extends Component {
  fetchData() {
    return fetch(
      "http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt?date=DD.MM.RRRR"
    )
      .then(response => response.json())
      .then(parsedJSON => console.log(parsedJSON.results))
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    this.fetchData();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CNB Exchange rates App</h1>
        </header>
        <DatePickerExampleSimple />
        <TableExampleSimple />
        <FlatButtonExampleSimple />
      </div>
    );
  }
}

export default App;
