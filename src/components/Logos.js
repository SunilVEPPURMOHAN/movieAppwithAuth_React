import React from "react";
import { HouseDoor, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Logos = ()=>{
    return(
        <>
        
            <><Link to="/home">
<HouseDoor size={48}/>
</Link></><br/>
<><Link to="/mymovies">
            <PersonCircle size = {48}/>
            </Link> </>
        </>
    )
}

export default Logos;