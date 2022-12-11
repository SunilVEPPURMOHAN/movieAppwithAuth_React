import React from "react";
import { Row, Col } from "react-bootstrap";
import Logos from "../components/Logos";
import SearchBox from "../components/SearchBox";
import Movielist from "../components/Movielist";


const Home = () => {

return(
    <>
        <Row style={{ height: '100vh', minHeight: '100vh', flexWrap: "nowrap", overflow:'auto' }}>
        <Col style={{ backgroundColor: "lightsteelblue", width: '5vw',minWidth:'5vw', minHeight:'100vh', position:"fixed", left:'0'}}>
        <Logos/></Col>
        <Col style={{ backgroundColor: "darkblue", width:'95vw', minWidth:'95vw', position:'fixed', left:'5vw'}}>
            <Row style={{ height: '10vh', minHeight: '10vh', flexWrap: "wrap" , position: "fixed", top:'0', width: '100%', backgroundColor:"darkblue"}}><SearchBox/></Row>
            <Row style={{ height: '90vh', minHeight: '90vh', flexWrap: "wrap", position: "fixed", bottom:'0', width: '100%' }}>
       <Movielist/>
            </Row>
        </Col>
        </Row>

    </>
)

};



export default Home;