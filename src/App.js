import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import ContinentsData from './components/ContinentsData'
import MostAffected from './components/MostAffected'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroText />
      <ContinentsData />
      <MostAffected />
      <Footer />
    </div>
  );
}

export default App;
