import './App.css';  // Aquí importamos los estilos globales (App.css)
import Header from './components/Header';  // Importamos el componente Header
import Footer from './components/Footer';  // Importamos el componente Footer
import Banner from './components/Banner';
import './components/Footer.css';
import './components/Header.css';


function App() {
  return (
    <div className="App">
      <Header />  {/* Usamos el componente Header */}
      <Banner />
      <Footer /> {/* Usamos el componente Footer */}
    </div>
  );
}

export default App;


