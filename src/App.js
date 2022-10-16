import './App.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurSpecialty from './components/OurSpecialty';
import PicksFlashSale from './components/PicksFlashSale';
import SeventyOff from './components/SeventyOff';
import Showcase from './components/Showcase';
import Support from './components/Support';
import WinterNewArrivals from './components/WinterNewArrivals';



function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <WinterNewArrivals />
      <PicksFlashSale />
      <OurSpecialty />
      <SeventyOff />
      <Support />
      <Footer />
    </>
  );
}

export default App;
