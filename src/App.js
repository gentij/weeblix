import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Popular from './views/Popular'
import Movies from './views/Movies'
import Search from './views/Search'
import Anime from './views/Anime'
import NotFoundPage from './views/NotFoundPage'

import './styles/app.css'       

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/anime/:title" component={Anime}></Route>
            <Route path="/search" exact component={Search}></Route>
            <Route path="/movies/page=:id" component={Movies}></Route>
            <Route path="/popular/page=:id" component={Popular}></Route>
            <Route path="/home/page=:id" component={Home} exact></Route>
            <Route path="/"> 
              <Redirect to="/home/page=1" />
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
