import React from "react";
import Login from "./pages/Login";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";    
import Eror from "./pages/Eror";
import bootstrap from 'bootstrap'
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Details from "./pages/Details";
 import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    
   <Switch>
    <Route path="/login"exact component={Login} />
    <Route path="/Register" exact component={Register} />
    <Route path="/" exact component={Home} />
    <Route path ="/Detials/:id" component={Details}></Route>
    <Route path="/favorites" component={Favorites} />
    <Route path="*"  component={Eror} />
    {/* ////////// */}
   

    </Switch>
    </BrowserRouter>
  );
}

export default App;

