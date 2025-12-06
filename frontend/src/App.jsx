import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Login from './pages/Login.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/best-products" element={<Products />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
