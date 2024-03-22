import './App.css';
import Navbar from './costumer/components/Navbar/Navbar';
import Footer from './costumer/components/Navbar/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './costumer/components/pages/Products';
import Checkout from './costumer/components/Product/CheckOut/Checkout';

function App() {
  return (
    <Router> {/* Ensure Router is only used once at the top level */}
      <div className="">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Checkout/>} />
          <Route path="/products" element={<Products />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
