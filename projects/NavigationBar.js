import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Header from './Header';
import Home from './Homec';
import Register1 from './Register1';

export default function Navi() {
    return (
        <div>
            <Header />
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#8EAF6C' }}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"><strong>HOME</strong></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/about" className="nav-link"><strong>ABOUT</strong></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/contact" className="nav-link"><strong>CONTACT</strong></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/login" className="nav-link"><strong>LOGIN</strong></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/register" className="nav-link"><strong>REGISTER</strong></Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register1 />} />
            </Routes>
        </div>
    );
}
