import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Projects from "./Components/Project/project";
import Nav from "./Components/Navbar/nav";
import { Footer } from "./Components/footer/footer";
import Contact from "./Components/Contact/contact";
import About from "./Components/About/about";
import Story from "./Components/Story/story";
import Product from "./Components/Product/product";
import Services from "./Components/Services/Service";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
        <Route path="/services" element={<Services />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
