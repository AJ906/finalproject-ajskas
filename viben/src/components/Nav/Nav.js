import React from "react";
import "./Nav.css";

const Nav = (handleClick) => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <div className="row">

            <a className="navbar-brand cols2" href="/">
                Vibe'n
            </a>

            <div className="col s2 right">
                <button onClick={handleClick} className="btn waves-effect waves-light" type="submit" name="action" >
                    Login
                </button>
            </div>
            <div className="input-field col s2 right">
                <input placeholder="Password" id="pw" type="password" className="validate"  />
            </div>
            <div className="input-field col s2 right">
                <input placeholder="Email" id="email" type="email" className="validate" />
            </div>

        </div>

</nav>
);

export default Nav;