import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './views/HomeView/Home';
import Login from './views/LoginView/Login';
import Header from './views/components/Header';
import Footer from './views/components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Container>
          <Route exact path = '/'><Home/></Route>
          <Route exact path = '/login'><Login/></Route>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
