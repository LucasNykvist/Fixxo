import './App.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PicksFlashSale from './components/PicksFlashSale';
import Showcase from './components/Showcase';
import Support from './components/Support';
import CustomerSupportIcon from './components/SupportIcons/CustomerSupportIcon';
import SecuredPaymentIcon from './components/SupportIcons/SecuredPaymentIcon';
import TruckIcon from './components/SupportIcons/TruckIcon';


function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <PicksFlashSale />
      <Support />
      <Footer />
    </>
  );
}

export default App;
