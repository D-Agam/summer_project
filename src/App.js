import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Features from './Components/Features';
import Documents from './Components/Documents';
import Register from './Components/Register';
import Login from './Components/Login';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      
      <Header />
      <Intro />
      <Features />
      <Documents />
      <Register />
      <Login />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
