import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResults/SearchResult";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchResult} />
          <Route exact path="/details/:id" component={BookDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
