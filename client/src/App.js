import "./styles/App.css";
import Home from "./pages/home";
import AddNewMovieForm from "./pages/form";
import Viewer from "./pages/viewer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-new" component={AddNewMovieForm} />
          <Route exact path="/watch" component={Viewer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
