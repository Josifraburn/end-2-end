import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import CreateCar from './Pages/CreateCar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>
          <Router>
            <div>
              <nav>
                <Link to='/'> HOME </Link>
                <Link to='/createcar'> CREATE CAR </Link>
              </nav>

              <Route exact path='/' component = {Home} />
              <Route path='/createcar' component = {CreateCar} />
            </div>
          </Router>
        </h1>
      </div>
    );
  }
}

export default App;
