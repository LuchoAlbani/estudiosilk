import React from 'react';
import './App.css'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import Banner from './components/Banner';
import Section from './components/Section';
import Blog from './components/Blog';
import './components/Footer.css';
import './components/Header.css';
import './components/Section.css';
import './components/Blog.css';

function App() {
  return (
    <div className="App">
      <Header />  
      <Banner />
      <Section />
      <Blog />
      <Footer /> 
    </div>
  );
}

export default App;



