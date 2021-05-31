import './App.css';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
