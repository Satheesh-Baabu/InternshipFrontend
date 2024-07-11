
import Nav from './components/Nav';
import About from './components/About'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import Services from './components/Services';
import Infrastructure from './components/Infrastructure';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery'
import Admin from './admin/Admin'
import Feedback from './admin/Feedback';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/infrastructure" element={<Infrastructure/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path='/admin' element={<Admin/>}></Route>          
          <Route path='/admin/feedback' element={<Feedback/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
