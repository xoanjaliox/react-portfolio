import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
        </Router>
  );
}

export default App;
