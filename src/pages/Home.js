import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { House, HouseDoor, Icon, PersonCircle } from "react-bootstrap-icons";
import Logos from "../components/Logos";
import Sorter from "../components/Sorter";
import SearchBox from "../components/SearchBox";
import Genre from "../components/Genre";
import movies from "../components/moviedata";


const Home = () => {
    // const [movies,setMovies] = useState([]);
// console.log(movies);

//     const configuration = {
//         method: "get",
//         url: "https://real-flannel-shirt-bee.cyclic.app/movie/home"
//       };

// axios(configuration)
// .then((result)=>{
//     setMovies(result.data);
//     })
// .catch((e)=>console.log(e))
return(
    <>
        <Row style={{ height: '100vh', minHeight: '100vh', flexWrap: "nowrap" }}>
        <Logos/>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: "darkcyan"}}>
            <Row style={{ height: '10vh', minHeight: '10vh', flexWrap: "nowrap" , position: "fixed", top:'0', width: '100%'}}><SearchBox/></Row>
            <Row style={{ height: '90vh', minHeight: '90vh', flexWrap: "nowrap", position: "fixed", bottom:'0', width: '100%' }}>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{ backgroundColor: "darkblue" }}><Genre/></Col>
      <Col xs={10} sm={10} md={10} lg={10} xl={10} style={{ backgroundColor: '#1e90ff' }}>
        <Row style={{ height: '5vh', minHeight: '5vh', width: '100%'}}><Col><h1>24 Movies</h1></Col>
        <Col><Sorter/></Col>
            </Row>
        <Row style={{ height: '95vh', minHeight: '95vh'}}>
        <div className="d-flex container-fluid" style={{flexWrap: "wrap", justifyContent: "space-around"}}>
        {movies.map((movie)=><Movie movie ={movie}/>)}
        </div>
        </Row>
        </Col>
            </Row>
        </Col>

      
        </Row>

    </>
)

};



export default Home;