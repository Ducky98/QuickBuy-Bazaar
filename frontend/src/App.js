import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRoutes from './costumer/components/Routes/CustomerRoutes';

function App() {
  return (
    <Router> {/* Ensure Router is only used once at the top level */}
      <div className="">

        {/* Routes */}
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
