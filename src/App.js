import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext'; // Adjust the import path as necessary
import ProductList from './components/ProductList';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router>
          <div>
            {/* Navigation Links */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Product List</Link>
                </li>
                <li>
                  <Link to="/product/add">Add Product</Link>
                </li>
              </ul>
            </nav>

            {/* Routes for different pages */}
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} /> {/* Catch all other route */}
            </Routes>
          </div>
        </Router>
      </ProductsProvider>
    </div>
  );
}

export default App;
