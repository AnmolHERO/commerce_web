import React from "react";
// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


// import Navbar from "./Component/Navbar/Navbar";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Shop from './Pages/Shop';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import LoginSignup from './Pages/LoginSignup';
// import Cart from './Pages/Cart';
// import Footer from './Component/Footer/Footer';
// import men_banner from './Component/Assets/banner_mens.png';
// import women_banner from './Component/Assets/banner_women.png';
// import kid_banner from './Component/Assets/banner_kids.png';

import Gym_Website from './Component_Gym_website/Component/Gym_Website';
import Navbar from './Component_Gym_website/Component/Navbar';
import Header from './Component_Gym_website/Component/Header';
import Feature from './Component_Gym_website/Component/Feature';
import Offer from './Component_Gym_website/Component/Offer';
import About from './Component_Gym_website/Component/About';
import Contact from './Component_Gym_website/Component/Contact';


// import Real_estate from './Ccomponent_Real_estate/Ccomponent/Real_estate';
// import Navbar from './Ccomponent_Real_estate/Ccomponent/Navbar';
// import Header from './Ccomponent_Real_estate/Ccomponent/Header';
// import Howitwork from './Ccomponent_Real_estate/Ccomponent/Howitwork';
// import About from './Ccomponent_Real_estate/Ccomponent/About';
// import Agent from './Ccomponent_Real_estate/Ccomponent/Agent';
// import Properties from './Ccomponent_Real_estate/Ccomponent/Properties';
// import Contact from './Ccomponent_Real_estate/Ccomponent/Contact';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
  
<Gym_Website/>
<Navbar/>
<Header/>
<Feature/>
<Offer/>
<About/>
<Contact/>

{/* <Real_estate/>
<Navbar/>
<Header/>
<Howitwork/>
<About/>
<Agent/>
<Properties/>
<Contact/> */}




{/* 
<BrowserRouter>
<Navbar/>
<Routes>

<Route path='/' element={<Shop/>}/>
<Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
<Route path='/womens' element={<ShopCategory banner={women_banner}category="women"/>}/>
<Route path='/kids' element={<ShopCategory banner={kid_banner}category="kid"/>}/>
<Route path="/product" element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
</Routes>
<Footer/>
</BrowserRouter>
 */}

    </div>
  );
}

export default App;
