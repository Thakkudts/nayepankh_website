import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Join_us from "./pages/Join_us";
import Volunteer from "./pages/Volunteer";
import Certificates from "./pages/Certificates";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Join_us" element={<Join_us />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Certificate" element={<Certificates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;