import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import NotFound from "../src/components/NotFound";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Calendar from "../src/components/Calendar";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Diary from "./components/Diary";
import Package from "./components/Package";
import Card from "./components/Card";
import Catarlogue from "./components/Catarlogue";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/artgoods" component={Shop} />
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/catalogue" component={Catarlogue} />
        <Route exact path="/package" component={Package} />
        <Route exact path="/" component={Home} />
        <Route exact component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
