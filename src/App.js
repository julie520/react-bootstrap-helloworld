import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './layout/Layout';
import NavBar from './layout/NavBar';
import Jumbotron from './layout/Jumbotron';

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  );
}

export default App;
