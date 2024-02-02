import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider>
      seof,eddodsql;
      <Router>
        <Routes>
          <Route path="/users" element={<h1>seif</h1>} />
          <Route path="/products" element={<h1>Prodicts</h1>} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
