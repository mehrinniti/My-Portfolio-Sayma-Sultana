import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import ParticlesBanner from './Components/Banner/ParticlesBanner';



function App() {
  return (
    <div className="App">
      <ParticlesBanner></ParticlesBanner>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
