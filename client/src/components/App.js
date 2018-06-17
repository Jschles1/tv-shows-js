import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const Dashboard = () => <div>Dashboard</div>;
const ShowsNew = () => <div>ShowsNew</div>;
const Landing = () => <div>Landing</div>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/shows" component={Dashboard} />
            <Route exact path="/shows/new" component={ShowsNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;