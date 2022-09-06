import Hero from "./Componentes/Hero";
import BarraNav from "./Componentes/Navbar";
import Viajes from "./Componentes/Viajes";



function App() {
  return (
    <div className="App">
      <BarraNav/>
      <Hero/>
    <div className='container mt-5'>
      <Viajes/>
    </div>
      
    </div>
  );
}

export default App;
