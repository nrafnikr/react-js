import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Task/Styling/Navbar';
import Masthead from './Task/Styling/Masthead';
import Skill from './Task/Styling/Skill';
import Organization from './Task/Styling/Organization';
import Contact from './Task/Styling/Contact';
import Footer from './Task/Styling/Footer';
import About from './Task/Styling/About';

const App = () => {
  return (
    <>
      <Navbar />
      <Masthead />
      <Skill />
      <Organization />
      <About />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;