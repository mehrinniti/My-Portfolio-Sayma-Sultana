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
import About from './Components/AboutMe/About/About';
import Blogs from './Components/Blogs/Blogs';
import Resume from './Components/MyResume/Resume/Resume';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
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
