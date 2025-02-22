import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Plants from './pages/Plants';
import Cart from './pages/Cart';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/coursera-shopping-site-react" element={<Home />} />
        <Route exact path="/coursera-shopping-site-react/plants" element={<Plants />} />
        <Route exact path="/coursera-shopping-site-react/cart" element={<Cart />} />
        {/* <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
