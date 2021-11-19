import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        <nav className="navbar">
            <h1>Super Blog Party</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white", 
                    backgroundColor: '#46B9FF',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    </div>
    );

 
export default Navbar;