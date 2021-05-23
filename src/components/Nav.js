import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="pa3 pa4-ns">
            <div style={{display: 'flex', justifyContent: 'flex-end'}} className="pa2">
                <Link  
                    className="f3 link br1 pa3 fw5 bg-yellow dark-gray" 
                    to="/">Home
                </Link>
            </div>
            <h1 className="dim white b f1 f-headline-ns tc db mv3">Maltego</h1>
            <h2 className="dim white b f2 f2-ns tc db mb3 mb4-ns">Coding Challenge</h2>

        </nav>
    )
}

export default Nav;