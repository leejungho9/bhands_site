import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import NotFound from "../src/components/NotFound";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Calendar from "../src/components/Calendar";
import { Switch } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
