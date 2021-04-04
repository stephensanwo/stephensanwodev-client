import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./shared/pages/Home";
import Blog from "./blog";

function App() {
  return (
    <Router>
      <Switch />
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Switch />
    </Router>
  );
}

export default App;
