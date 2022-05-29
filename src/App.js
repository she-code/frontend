import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import pageNotFound from "./screens/pageNotFound";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <>
      <Router>
        <div className="grid-container">
          <header className="row">
            <ul style={{ color: "black" }}>
              <li>
                <Link to="/" className="brand">
                  Selina
                </Link>
              </li>
              <li>
                <Link to="/cart" className="brand">
                  cart
                </Link>
              </li>
              <li>
                <Link to="/signin" className="brand">
                  Sign in
                </Link>
              </li>
            </ul>
          </header>
          <main>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/" element={<HomeScreen />} exact></Route>
              <Route path="*" element={<pageNotFound />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
      <footer className="row center">All right reserved</footer>
    </>
  );
}

export default App;
