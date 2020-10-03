import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Uform from "./Form"
import DashBoard from "./DashBoard"

function App() {
  return (
    <BrowserRouter>
        <div>
            <Link to="/">Form</Link> - 
            <Link to="/DashBoard">Table</Link> 

            <Route path="/" component={Uform} exact={true} />
            <Route path="/dashboard" component={DashBoard} />
        </div>
        </BrowserRouter>
  );
}

export default App;
