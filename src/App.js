import "./App.scss";
import Home from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import SilverTier from "./pages/silver-tier/SilverTier";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}>
        <Route index element={<SilverTier />} />
      </Route>
    </Routes>
  );
}

export default App;
