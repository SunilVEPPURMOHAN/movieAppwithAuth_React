import React from "react";
import { HouseDoor, LightbulbOff, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Logos = ()=>{
    const logout = ()=>{
        // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    console.log("done");
        // redirect user to the landing page
        window.location.href = "/";
    };
    return(
 <>
 <Link to="/home">
<HouseDoor size={48}/>
</Link><br/>
<Link to="/mymovies">
            <PersonCircle size = {48}/>
            </Link> <br/>
<LightbulbOff size={48} onClick={logout}/>           
</>
    )
}

export default Logos;