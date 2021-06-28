import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login/Login';
import ResetPass from './login/ResetPass/ResetPass.js';
import ForgotPass from "./login/ForgotPass/ForgotPass";
import Admin from "./Admin/Admin.js";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-pass">
            <ForgotPass />
          </Route>
          <Route path="/reset-pass">
            <ResetPass />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          {/* <Route path="/">
            <Login />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
