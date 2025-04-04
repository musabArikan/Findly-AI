import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiVersionOne from "./pages/AiVersionOne";
import MyListings from "./pages/MyListings";
import { ListingProvider } from "./contexts/ListingContext";

function App() {
  return (
    <ListingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AIOne" element={<AiVersionOne />} />
          <Route path="/my-listings" element={<MyListings />} />
        </Routes>
      </Router>
    </ListingProvider>
  );
}

export default App;
