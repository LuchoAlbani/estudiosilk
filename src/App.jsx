import './App.css'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import Banner from './components/Banner';
import Section from './components/Section';
import './components/Footer.css';
import './components/Header.css';
import './components/Section.css'

function App() {
  return (
    <div className="App">
      <Header />  
      <Banner />
      <Section />
      <Footer /> 
    </div>
  );
}

export default App;


