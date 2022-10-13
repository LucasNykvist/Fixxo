import './App.min.css';
import Navbar from './components/Navbar';
import PicksFlashSale from './components/PicksFlashSale';
import Showcase from './components/Showcase';


function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <PicksFlashSale />
      <div style={{ "height": "5000px" }}></div>
    </>
  );
}

export default App;
