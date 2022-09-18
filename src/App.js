import Cards from './Componentes/Cards';
import Hero from './Componentes/Hero';
import BarraNav from './Componentes/BarraNav';
import Servicios from './Componentes/Servicios';
import Footer from './Componentes/Footer';
import Whatsapp from './Componentes/Whatsapp';
import './App.css';


function App() {
  return (
    <div className="App">
      <BarraNav/>
      <Hero/>
        <section className='fondo'>
          <Whatsapp/>
          <Servicios/>
          <Cards/>
        </section>
        <Footer/>
    </div>
    
  );
}

export default App;
