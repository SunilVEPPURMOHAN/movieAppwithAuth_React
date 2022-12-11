import axios from "axios";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Logos from "../components/Logos";
import Movielist from "../components/Movielist";


const Home = () => {
    const[movies,setMovies] = useState([]);

    const configuration = {
        method: "get",
        url: "https://real-flannel-shirt-bee.cyclic.app/movie/home",
      };

    axios(configuration)
    .then((result)=>{
    setMovies(result.data);
    // console.log(result.data);
      })
    .catch((e)=>console.log(e))

    

return(
    
    <>
        <Row style={{ height: '100vh', minHeight: '100vh', flexWrap: "nowrap", overflow:'auto' }}>
        <Col style={{ backgroundColor: "lightsteelblue", width: '5vw',minWidth:'5vw', minHeight:'100vh', position:"fixed", left:'0'}}>
        <Logos/></Col>
        <Col style={{ backgroundColor: "darkblue", width:'95vw', minWidth:'95vw', position:'fixed', left:'5vw'}}>
            <Movielist movies={movies}/>
        </Col>
        </Row>

    </>
)

};



export default Home;