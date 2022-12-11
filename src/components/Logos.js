import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon, HouseDoor, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Logos = ()=>{
    return(
        <>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{ backgroundColor: "lightsteelblue"}}>
            <><Link to="/home">
<HouseDoor size={48}/>
</Link></>
<><Link to="/mymovies">
            <PersonCircle size = {48}/>
            </Link> </></Col>
        </>
    )
}

export default Logos;