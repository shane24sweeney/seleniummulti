import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import  AdoptableDogs from './components/AdoptableDogs';
import AdoptionApplication from './components/AdoptionApplication';
import FosterApplication from './components/FosterApplication';
import React, {Component} from 'react';

 
class App extends Component {
  render() {
    return (      
      <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
  <Route exact path="/" component={Home} />
   <Route path="/adoptabledogs" component={AdoptableDogs} />
  <Route path="/adoptionapplication" component={AdoptionApplication} />
  <Route path="/fosterapplication" component={FosterApplication} />
</Switch>
      </Router>
    </React.Fragment>
    
    );
  }
}
 
export default App;