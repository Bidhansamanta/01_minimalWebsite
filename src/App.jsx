import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Explore from "./components/Explore";
import Collections from "./components/Collections";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
