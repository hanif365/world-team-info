import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Fixtures from "./components/Fixtures/Fixtures";
import Home from './components/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:teamId">
          <TeamDetails />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/fixtures">
          <Fixtures />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
