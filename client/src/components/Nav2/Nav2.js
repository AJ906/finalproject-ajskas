import React from "react";
import { Link } from "react-router-dom";
import "./Nav2.css";

const Nav2 = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Vibe'n
        </Link>
        <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/"></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/"></Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav2;
