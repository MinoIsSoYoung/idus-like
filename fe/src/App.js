import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home';
import Login from './header/view/login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
