
import './App.css';

// Import Components
import Login from './components/login.component';

// Import Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
