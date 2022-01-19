import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-bar-brand">
                    <Link className="nav-bar-item" to={"/"}>
                        Fråga Flashback
                    </Link>
                </div>

                <div className="nav-bar-menu">
                    <Link className="nav-bar-item" to={"/admin"}>
                        Admin
                    </Link>
                </div>

                <div className="nav-bar-menu">
                    <Link className="nav-bar-item" to={"/login"}>
                        Log in
                    </Link>
                </div>

                <div className="nav-bar-menu">
                    <Link className="nav-bar-item" to={"/register"}>
                        Sign up
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
