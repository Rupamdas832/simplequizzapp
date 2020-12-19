import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import QuestionCard from "./Components/QuestionCard"
import PageNotFound from './Components/PageNotFound';
import Result from './Components/Result';

const App = () => {
  return (
    
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/quizsection" component={QuestionCard}/>
    <Route exact path="/*" component={PageNotFound}/>
    <Route exact path="/result" component={Result}/>
    </Switch>
    
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
