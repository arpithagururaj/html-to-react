import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Header from "./pages/header";
// import Footer from "./pages/footer";


export default function App() {
  return (
    <React.Fragment>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            
          </ul>
        </nav> */}
       
    

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
           
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
      {/* <Footer></Footer> */}
    </Router>
    </React.Fragment>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
