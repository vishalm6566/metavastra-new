import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roadmap from './components/Roadmap';
import Opensea from './components/Opensea';
import About from './components/About';
import Allitems from './components/Allitems';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Info1 from './components/Info1';
import PrivacyPolicy from './components/PrivacyPolicy';



function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
    < Route exact path="/home" element={<Home/>} />
    < Route exact path="/" element={<Roadmap/>} />
    < Route exact path="/opensea" element={<Opensea/>} />
    < Route exact path="/about" element={<About/>} /> 
    < Route exact path="/nft/*" element={<Allitems/>}/>
    < Route exact path="/nft/info1" element={<Info1/>}/>
    <Route/>
    < Route exact path="/faq" element={<Faq/>} />
    < Route exact path="/contact" element={<Contact/>} />
    < Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />

    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
