import React from "react";
import ShoppingList from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css"; // Import custom CSS

const App = () => {
  return (
    <div className="App">
      <ShoppingList />
    </div>
  );
};

export default App;
