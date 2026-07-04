import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Services from "./pages/Services";
import Pediatric from './pages/Pediatric';
import Tinnitus from './pages/Tinnitus';

function App(){
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pediatric" element={<Pediatric />} />
          <Route path="/tinnitus" element={<Tinnitus />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;