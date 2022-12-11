import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, FormControl } from "react-bootstrap";
import Logos from "../components/Logos";
import Movielist from "../components/Movielist";


const Home = () => {
    const[movies,setMovies] = useState([]);
    const [search,setSearch] = useState("");

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
            <Row style={{ height: '10vh', minHeight: '10vh', flexWrap: "wrap" , position: "fixed", top:'0', width: '100%', backgroundColor:"darkblue"}}>
            <Form>
            <FormGroup controlId="formBasicSearch">
                <Col xs={10}>
                    <FormControl type="text"
placeholder="Enter movie title" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </Col>
            </FormGroup>
            </Form>
               </Row>
            <Row style={{ height: '90vh', minHeight: '90vh', flexWrap: "wrap", position: "fixed", bottom:'0', width: '100%' }}>
       <Movielist search={search} movies={movies}/>
            </Row>
        </Col>
        </Row>

    </>
)

};



export default Home;