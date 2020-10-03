import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import  Education from './components/Education';
import Resume from './components/Resume';
import React, {Component} from 'react';

 
class App extends Component {
  render() {
    return (      
      <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/education" component={Education} />
  <Route path="/resume" component={Resume} />
</Switch>
      </Router>
    </React.Fragment>
    
    );
  }
}
 
export default App;