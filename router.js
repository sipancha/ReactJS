import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './homePage';
import Author from './author';

class RouterApp extends Component {
   render() {
	   const displayinline = {
		   display:"inline",
		   fontSize:"20px",
		   paddingLeft: "20px"
    	   
	   }
      return (
         <Router>
            <div>
               <img style={{float:"left"}} src="C:\Users\sibichakkaravarthyp\Desktop\hcllogo.jpg" width="100" height="100"/>
               <ul style={{listStyleType:"none",top: "32px",position: "relative",left: "150px"}}>
                  <li style={displayinline}><Link to={'/'}>Home</Link></li>
                  <li style={displayinline}><Link to={'/Author'}>Author</Link></li>
               </ul>
               <hr style={{clear:"left"}}/>
               
               <Switch >
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Author' component={Author} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default RouterApp;
