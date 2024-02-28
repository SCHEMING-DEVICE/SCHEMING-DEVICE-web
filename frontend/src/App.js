//import logo from './logo.svg';
import './App.css';
import {BrownserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

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
         
            <div className="brand">
                <button onclick={openMenu}>&#9776;</button>
                <a href="index.html">Scheming Device</a>
            </div>
            <div className="header-links">
                 <Link to ="/">Home</Link>
                <Link to = "/catalog">Catalog</Link>
             </div>
    
        <link rel="stylesheet" href="style.css">
        <title>Scheming Device</title>
        </link>
    
    <body>
        <div>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onclick={closeMenu}>x</button>
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
