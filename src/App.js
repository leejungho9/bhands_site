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
import Shop from "./components/Shop";
import Diary from "./components/Diary";
import Package from "./components/Package";
import CalendarDetail from "./components/CalendarDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/calendar/detail" component={CalendarDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/artgoods" component={Shop} />
        <Route path="/diary" component={Diary} />
        <Route path="/package" component={Package} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
