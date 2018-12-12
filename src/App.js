import React, { Component } from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import ContactList from "./components/contactlist";
import AddContact from "./components/addcontact";
import UpdateContact from "./components/update";



class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="text-center mb-5 text-dark"> Contact List</h1>
          <NavLink to='/contact-list'> <button className="btn btn-dark bg-dark"> Contact List </button> </NavLink>
          <NavLink to='/add-contact'> <button className="btn btn-dark bg-dark"> Add Contact </button> </NavLink>

          <Switch>
            <Route exact path="/contact-list" render={props=><ContactList body={props.match}/>}/>
            <Route path="/add-contact" component={AddContact}/>
            <Route path="/modify-contact/:id" render={props=><UpdateContact id={props.match.params.id}/>}/>
            <Route path="/contact-list/:id" render={()=><Redirect to="/contact-list"/>}/>
          </Switch>
      </div>
    );
  }
}

export default App;
