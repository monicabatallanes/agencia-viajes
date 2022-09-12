import Cards from './Componentes/Cards';
import Hero from './Componentes/Hero';
import BarraNav from './Componentes/BarraNav';
import Servicios from './Componentes/Servicios';


function App() {
  return (
    <div className="App">
      <BarraNav/>
      <Hero/>
        <section>
          <Servicios/>
          <Cards/>
        </section>
    </div>
    
  );
}

export default App;
