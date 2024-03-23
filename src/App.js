import logo from './logo.svg';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Facility from './components/Facility';
import Academics from './components/Academics';
import Admissions from './components/Addmission';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/facilities' element={<Facility/>}/>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/admission' element={<Admissions/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
