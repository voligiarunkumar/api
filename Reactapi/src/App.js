import logo from "./logo.svg";
import "./App.css";

import React from "react";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:5037/api/Issue").then((resp) => {
      resp.json().then((result) => {
        this.setState({ users: result.data });
        console.log(result);
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Fetch data</h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div>
                <p>
                  {i}--- {item.first_name}
                  {item.last_name}
                  ----{item.email}
                </p>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default App;
