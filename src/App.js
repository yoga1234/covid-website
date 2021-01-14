import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import ContinentsData from './components/ContinentsData'
import MostAffected from './components/MostAffected'
import Footer from './components/Footer'

// importing dummy json
import CovidData from './covid'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroText />
      <ContinentsData data={CovidData}/>
      <MostAffected />
      <Footer />
    </div>
  );
}

export default App;
