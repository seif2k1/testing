import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>seof eeipqsd,m,dqs,d,;</h1>
      <Router>
        <Routes>
          <Route path="/users" element={<h1>seif</h1>} />
          <Route path="/products" element={<h1>Prodicts</h1>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
