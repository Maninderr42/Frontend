import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import SellPropertyForm from './components/SellPropertyForm';
import Buyer from './components/Buyer';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/sell-property" element={<SellPropertyForm />} />
          <Route path="/Buyer" element={<Buyer />} />

        </Routes>
      </div>
    </Router>
  );
}

// Optional: A simple Home component
function Home() {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <p>Choose an option in the navigation bar to continue.</p>
    </div>
  );
}

export default App;
