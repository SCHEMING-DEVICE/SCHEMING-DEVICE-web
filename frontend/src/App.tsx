//import logo from './logo.svg';
import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home/Home.tsx";
import Products from "./Products/Products.tsx";
import Orders from './Orders/Orders.tsx'
import OrderDetail from "./Orders/OrderDetail.tsx";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open")
  }
  return (
    <Router>
    <div className="grid-container">
         <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Scheming Device</a>
            </div>
            <div className="header-links">
                 <Link to ="/">Home</Link>
                <Link to = "/catalog">Catalog</Link>
                <Link to="/orders">Orders</Link>
             </div>
    
        <link rel="stylesheet" href="style.css">
        <title>Scheming Device</title>
        </link>
        </header>
    <body>
        <div>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>

                    <li>
                        <a href="index.html">Shirts</a>
                    </li>
                </ul>
            </aside>
            <main>
               <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />}/>
                <Route path="orders" element={<Orders />}></Route>
                <Route path="/order/:id" element={<OrderDetail/>}></Route>
               </Routes>
            </main>
            <footer>
                © 2022 Scheming Device 
            </footer>
        <div>
          </div>
          </div>
   </body> 
  </div>
  </Router>
  );

}

export default App;
