import './App.css';
import Navbar from './components/reusablecomponets/Navbar';
import Home from './components/home/Home';
import Event from './components/Event/Event';
import Projects from './components/ProjectsComponent';
import Contact from './components/ContactComponent';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/reusablecomponets/Footer';
import OurStory from './components/story/OurStory';
import HealthCareSolutions from './components/HealthCareComponent';
import ChatNow from './components/home/ChatNow';
function App() {
  return (
    
    <BrowserRouter>
   
  
    <Navbar/>

  
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/story" element={<OurStory />}></Route>
    <Route path="/healthcaresolutions" element={<HealthCareSolutions />}></Route>
    <Route path="/events" element={<Event />}></Route>
    <Route path="/projects" element={<Projects />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/chatnow" element={<ChatNow />}></Route>
   
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
