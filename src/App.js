import logo from './logo.svg';
import './App.css';
import MyButton from './Task/Component/MyButton';
import Navbar from './Task/Component/Navbar';
import Footer from './Task/Component/Footer';

const App = () => {
  const navHeading = "Welcome 😊";
  const navText = "Social Media";

  const clicked = () => {
    return alert('Terima kasih sudah di click hehehe... 😁')
  }

  const paragraf = () => {
    return (
      <div>
        <h3>Sekian ✌</h3>
        <marquee>Bye Bye 👋</marquee>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hallooo....
        </p>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
};

export default App;
