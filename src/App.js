import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Admin from "./views/Admin";
import ChatRoom from "./views/ChatRoom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import AuthService from "./services/auth.service";

let isLoggedIn;

function checkLogIn() {
    if (AuthService.getCurrentUser() != null) {
        const user = AuthService.getCurrentUser();
        console.log(user);
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
}
checkLogIn();
console.log("App.js checkLogIn() isLoggedIn = " + isLoggedIn);

class App extends Component {

    render() {
        return (
            <div className="app">
                <header>
                    <nav className="nav-bar">
                        <div className="nav-bar-brand">
                            <Link className="nav-bar-item nav-link" to={"/"}>
                                Fråga Flashback
                            </Link>
                        </div>

                        <div className="nav-bar-menu">
                            <Link className="nav-bar-item nav-link" to={"/admin"}>
                                Admin
                            </Link>
                        </div>

                        <div className="nav-bar-menu">
                            <Link className="nav-bar-item nav-link" to={"/login"}>
                                Log in
                            </Link>
                        </div>

                        <div className="nav-bar-menu">
                            <Link className="nav-bar-item nav-link" to={"/register"}>
                                Sign up
                            </Link>
                        </div>
                    </nav>
                </header>

                <div>
                    <Switch>
                        <Route exact path="/">
                            {isLoggedIn ? <Redirect to="/chat" /> : <Redirect to="/login" />}
                        </Route>

                        <Route exact path="/chat" component={ChatRoom} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
