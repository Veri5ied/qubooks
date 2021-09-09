import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResults/SearchResult";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  // React Context API for cart
  const AppContext = React.createContext();
  const [cart, setCart] = useState([]);
  const contextValue = {
    cart,
    addToCart: (book) => {
      const index = cart.findIndex((item) => item.book.id === book.id);
      if (index === -1) {
        setCart([...cart, { book, quantity: 1 }]);
      } else {
        const newCart = cart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );

        setCart(newCart);
      }
    },
    removeFromCart: (book) => {
      const index = cart.findIndex((item) => item.book.id === book.id);
      if (index !== -1) {
        const newCart = cart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(newCart);
      }
    },
    removeAllFromCart: (book) => {
      const index = cart.findIndex((item) => item.book.id === book.id);
      if (index !== -1) {
        const newCart = cart.filter((item, i) => i !== index);
        setCart(newCart);
      }
    },
  };
  
  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchResult} />
            <Route exact path="/details/:id" component={BookDetails} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
