import './App.css';
import Navbar from './costumer/components/Navbar/Navbar';
import Home from './costumer/components/pages/Home';
import Footer from './costumer/components/Navbar/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './costumer/components/pages/Products';
import ProductOverview from './costumer/components/Product/ProductOverview/ProductOverview';
import ProductWrapper from './costumer/components/Product/ProductOverview/ProductWrapper';
import Cart from './costumer/components/Product/cart/cart';

function App() {
  return (
    <Router> {/* Ensure Router is only used once at the top level */}
      <div className="">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
