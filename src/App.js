import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Redirect, withRouter} from 'react-router-dom';
import Cast from './components/Cast';
import PrivateRoute from './components/PrivateRoute';
import GuestRoute from './components/GuestRoute';
import People from './components/People';
import Favorite from './components/Favorite';

function App() {
  return (
    <Router>
        <Switch>
            <PrivateRoute exact path="/general" component={Cast} />
            <GuestRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/people" component={People} />
            <PrivateRoute exact path="/favorite" component={Favorite} />
            <Redirect to="/login"/>
        </Switch>
    </Router>
    );

  
}
export default withRouter(App);
