import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Launches from "./views/Launches";
import Launch from "./views/Launch";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <header>
        <nav>
          <Link to="/launches">Launches</Link>
        </nav>
        <hr />
      </header>

      <Router>
        <Launches path="/launches" />
        <Launch path="/launches/:id" />
        <Redirect from="/" to="/launches" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
