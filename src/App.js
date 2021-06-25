import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Signup from './components/Signup/Signup';
import UserEdit from './components/UserEdit/UserEdit';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/UserEdit/:id" children={<UserEdit />} />
            
          <Route path="/Signup">
            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
