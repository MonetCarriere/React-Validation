import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./Form";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;




























