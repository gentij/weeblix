import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Popular from './views/Popular'
import Ongoing from './views/Ongoing'
import NotFoundPage from './views/NotFoundPage'

import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/ongoing" component={Ongoing}></Route>
            <Route path="/popular" component={Popular}></Route>
            <Route path="/" component={Home} exact></Route>
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
