import "./App.scss";
import Home from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import SilverTier from "./pages/silver-tier/SilverTier";
import NotFound from "./pages/notfound/NotFound";
import Tier from "./pages/tier/Tier";
function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}>
        <Route index element={<Tier />} />
        <Route path="silver-tier" element={<SilverTier />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
