import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup/Signup";
import UserEdit from "./components/UserEdit/UserEdit";
import Software from "./components/Software/Software";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* https://domain.com/UserEdit/id */}
          <Route path="/UserEdit/:id" children={<UserEdit />} />

          {/* Route for software details page */}
          <Route path="/software/:id" children={<Software />} />

          {/* https://domain.com/ */}
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
