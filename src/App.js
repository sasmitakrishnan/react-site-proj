import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Details from './components/Details';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';

export default function App() {
  
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound}/>
        </Switch>  
        <Modal/>    
      </>
    );
  
}

