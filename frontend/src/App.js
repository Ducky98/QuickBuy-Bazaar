import './App.css';
import Navbar from './costumer/components/Navbar/Navbar';
import Home from './costumer/components/pages/Home';
import Footer from './costumer/components/Navbar/footer/Footer';

/**
 * App Component
 * This is the root component of the application.
 * It renders the Navbar, Home page, and Footer.
 */
function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar/>

      {/* Home Page */}
      <div>
        <Home/>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
