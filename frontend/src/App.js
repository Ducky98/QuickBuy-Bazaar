import './App.css';
import Navbar from './costumer/components/Navbar/Navbar';
import Home from './costumer/components/pages/Home';
import Footer from './costumer/components/Navbar/footer/footer'
function App() {
  return (
    <div className="">
      <Navbar/>
      <div>
        <Home/>
  
      </div>
      <Footer />
    </div>
  );
}

export default App;
