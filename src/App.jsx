import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import Banner from './components/Banner';
import Section from './components/Section';
import Blog from './components/Blog';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Header />  
      <Banner />
      <Quiz />
      <Section />
      <Blog />
      <Footer /> 
      <Outlet />
    </div>
  );
}

export default App;



