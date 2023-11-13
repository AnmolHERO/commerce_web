//No 1


import React from 'react';
import logo from './images/logo1.png';
import { Link } from 'react-scroll';
function Navbar() {

    return (
        <nav>
            <a href='#'className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>




            <li><Link to='header' smooth={true} duration={1000} className='active'>Home</Link></li>
            <li><Link to='about'  smooth={true} duration={1000} className='active'>About</Link></li>
            <li><Link to='agent'  smooth={true} duration={1000} className='active'>Agent</Link></li>
            <li><Link to='product'  smooth={true} duration={1000} className='active'>Property</Link></li>
            <li><Link to='contact'  smooth={true} duration={1000} className='active'>Contact</Link></li>
                {/* <li><a href='header' className='active'>Home</a></li>
                <li><a href='about' className='active'>About</a></li>
                <li><a href='agent' className='active'>Agent</a></li>
                <li><a href='Property' className='active'>Property</a></li>
                <li><a href='contact' className='active'>Contact</a></li> */}
            </ul>
            {/* <a href='#property' className='property'>Properties</a> */}
        </nav>
    );
};

export default Navbar;





































// No 2

// import React, { Component } from 'react'
// import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import Properties from './Properties';

// import Contact from './Contact';
// import logo from './images/logo1.png';
// import Header from './Header';
// import Agent from './Agent';
// import About from './About';


// export default class Navabar extends Component {
//   render() {
//     return (
//         <Router>
//       <div>
//         <Navbar expand="lg"bg="light" data-bs-theme="light" className="bg-body-tertiary">
//         {/* <Navbar expand="lg"bg="dark" data-bs-theme="dark" className="bg-body-tertiary"> */}
//       <Container>
//         <Navbar.Brand href="#home">
//             <img src={logo}   />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Header} to={"header"}  smooth={true} duration={1000} className='active'>Home</Nav.Link>
//             <Nav.Link as={About} to={"/about"} smooth={true} duration={1000} className='active'>About</Nav.Link>
//             <Nav.Link as={Agent} to={"/agent"} smooth={true} duration={1000} className='active'>Agent</Nav.Link>
//             <Nav.Link as={Properties} to={"/product"} smooth={true} duration={1000} className='active'>Property</Nav.Link>
//             <Nav.Link as={Contact} to={"/contact"} smooth={true} duration={1000} className='active'>Contact</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       </div>
//      <div>
// <Header/>
// <About/>
// <Agent/>
// <Properties/>
// <Contact/>
//       {/* <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/" element={<Header />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/agent" element={< Agent/>} />
//         <Route path="/product" element={< Properties/>} />
//         <Route path="/contact" element={< Contact/>} />
//       </Routes> */}
        
//       </div> 
//       </Router>
//     )
//   }
// }







// // No 2

// import React, { Component } from 'react'
// import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import Properties from './Properties';

// import Contact from './Contact';
// import logo from './images/logo1.png';
// import Header from './Header';
// import Agent from './Agent';
// import About from './About';


// export default class Navabar extends Component {
//   render() {
//     return (
//         <Router>
//       <div>
//         <Navbar expand="lg"bg="light" data-bs-theme="light" className="bg-body-tertiary">
//         {/* <Navbar expand="lg"bg="dark" data-bs-theme="dark" className="bg-body-tertiary"> */}
//       <Container>
//         <Navbar.Brand href="#home">
//             <img src={logo}   />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to ={"/home"}>Home</Nav.Link>
//             <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
//             <Nav.Link as={Link} to={"/agent"}>Agent</Nav.Link>
//             <Nav.Link as={Link} to={"/product"}>Property</Nav.Link>
//             <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       </div>
//      <div>

//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/agent" element={< Agent/>} />
//         <Route path="/product" element={< Properties/>} />
//         <Route path="/contact" element={< Contact/>} />
//       </Routes>
        
//       </div> 
//       </Router>
//     )
//   }
// }
































































