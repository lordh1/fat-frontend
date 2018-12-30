import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Invoices from './components/Invoices'
import Payments from './components/Payments'
import './css/App.css'
import Top10amount from "./components/Top10amount";
import Top10laggards from "./components/Top10laggards";

class App extends Component {

  render() {
    return (
      <Router>
        <div className='Main'>
          <Link className="App__button" to="/">Home</Link>
          <Link className="App__button" to="/invoices">Invoices</Link>
          <Link className="App__button" to="/payments">Payments</Link>
          <Link className="App__button" to="/top10amount">TOP 10 amount</Link>
          <Link className="App__button" to="/top10laggards">TOP 10 laggards</Link>
          <Route exact path="/" component={Home} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/payments" component={Payments} />
          <Route path="/top10amount" component={Top10amount} />
          <Route path="/top10laggards" component={Top10laggards} />
        </div>
      </Router>
    )
  }
}

export default App
