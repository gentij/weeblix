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
import Movies from './views/Movies'
import NotFoundPage from './views/NotFoundPage'

import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/movies" component={Movies} exact></Route>
            <Route path="/popular" component={Popular} exact></Route>
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
