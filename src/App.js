import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Admin from "./views/Admin";
import ChatRoom from "./views/ChatRoom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import { Link } from "react-router-dom";
import React, { Component } from "react";

    function PrivateRoute ({ chatRoom, ...rest }) {
        return (
            <Route {...rest} render={({ location }) => {
                return localStorage.getItem("user") === true
                    ? chatRoom
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }} />
            }} />
        )
    }

const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}
class App extends Component {
    // useEffect(() => {
    //     async function scrape() {
    //         // const responseTitle = await client.post("/forumthreads/scrape");
    //         // console.log(responseTitle);
    //         // const response = await client.post("/quotes/scrape");
    //         // console.log(response.data);
    //     }
    //     scrape();
    // }, []);


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
                        <PrivateRoute exact path="/">
                         <ChatRoom />
                         <PrivateRoute/>
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
