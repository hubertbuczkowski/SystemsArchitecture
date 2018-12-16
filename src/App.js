import React, { Component } from 'react';
import Login from './main/Login/Login';
import Welcome from './main/default/Welcome';
import { BrowserRouter, Route, Switch, link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' render={(props) => <Welcome {...props}  />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
