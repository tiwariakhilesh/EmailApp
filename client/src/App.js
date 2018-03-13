import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header'
import logo from './logo.svg';
import {connect} from 'react-redux';
import * as actions from './actions'
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Header/>
        <Route path="/" exact component={()=> <h2  style={{textAlign:'center'}}>Landing page</h2>}/>
        <Route path="/surveys" exact component={()=> <h2 style={{textAlign:'center'}}>dashboard page</h2>}/>
      </div>
    );
  }
}


export default connect(null, actions)(App) ;
