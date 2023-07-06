import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Todo from "./components/todo";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ShoppingCartPage from "./components/shoppingCart";
// Import other components...

const App = () => {
  // Define the Home, About, and Contact components...

  return (
    <AppProvider>
      <Router>
        <div>
          {/* Navigation */}
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/shoppingCart">shopping</Link>
              </li>
            </ul>
          </nav>

          {/* Routing */}
          <Routes>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shoppingCart" element={<ShoppingCartPage />}></Route>
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
