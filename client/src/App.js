import './App.css';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PrivateRoute
import PrivateRoute from './Private/PrivateRoute';


import { Provider } from 'react-redux';
import Store from './Redux';
import LandingPage from './components/Home/LandingPage';



function App() {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <PrivateRoute exact path="/home" component={LandingPage}></PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
