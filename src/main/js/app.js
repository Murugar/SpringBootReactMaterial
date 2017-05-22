import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

import configureStore from './configureStore';
import ThoughtInput from './components/thought_input';
import ThoughtList from './components/thought_list';

import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  render() {
    return (
    
    		
    		 <div class="container-fluid">
    		
      <MuiThemeProvider>
    
      <div className="container-fluid">
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Spring Boot Material React</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </nav>
      
     
      <div className="panel panel-primary">		
	     
	     <div className="panel-heading">Main</div>
	     
	     <div className="panel-body">
   
      
        <div className="container">
        
        <div className="row">
        
        <div className="col-md-6">
        
        
     
        
          <ThoughtInput />
          <ThoughtList />
          
        </div>  
        </div>  
        </div>
        </div>  
        </div>
        
        
        </div>  
      </MuiThemeProvider>
      
      </div>  
   
    );
  }
}
