import Cards from "./Componentes/Cards";
import Cenas from "./Componentes/Cenas";
import Hero from "./Componentes/Hero";
import BarraNav from "./Componentes/BarraNav";
import Viajes from "./Componentes/Viajes";



function App() {
  return (
    <div className="App">
      <BarraNav/>
      <Hero/>
        <section>
          <Viajes/>
          <Cenas/>
          <Cards/>
        </section>
      
      
    </div>
    
  );
}

export default App;
