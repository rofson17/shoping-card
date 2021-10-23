import './App.css';

import { Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";

import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import ErrorPage from "./Components/404Error/ErrorPage";
import Shop from "./Components/Shop/Shop";

const App = () => {
    document.title = "Shop";

    const [mode, setMode] = useState("light");

    const toggleMode = () => {
        if (mode === "light")
            setMode("dark");
        else setMode("light");
    }


    return (
        <>

            <NavBar mode={mode} toggleMode={toggleMode} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" >
                    <Contact mode={mode} />
                </Route>
                <Route exact path="/shop" component={Shop} />
                {/*<Route exact to="/shop" component={Shop}/>*/}
                <Route exact to="/error_page" component={ErrorPage} />
                <Redirect to="/error_page" />
            </Switch>

        </>
    );
}

export default App;
