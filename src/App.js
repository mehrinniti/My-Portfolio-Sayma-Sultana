import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            {/* <Services></Services> */}
          </Route>
          <Route path="/login">
            {/* <Login></Login> */}
          </Route>
          <Route path="/signup">
            {/* <SignUp></SignUp> */}
          </Route>
          <Route path="/doctors">
            {/* <Doctors></Doctors> */}
          </Route>

          <Route path="*">
            {/* <NotFound></NotFound> */}
          </Route>

        </Switch>

        {/* <Footer></Footer> */}

      </Router>

    </div>
  );
}

export default App;
