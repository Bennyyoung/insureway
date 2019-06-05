import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Payment = React.lazy(() => import('./views/Pages/Payment'));
const Register = React.lazy(() => import('./views/Pages/Register'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/payment" name="Payment Page" render={props => <Payment {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
