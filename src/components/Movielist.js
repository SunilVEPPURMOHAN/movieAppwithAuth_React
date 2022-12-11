import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Movie from "./Movie";
import genres from "../genredata";
import axios from "axios";


const Movielist = (props)=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedValue, setSelectedValue] = useState("Sort By");
    const [genre,setGenre] = useState("All");
    const [pageitems, setPageitems] = useState([]);
    const [movies,setMovies] = useState([])
    const [moviess,setMoviess] = useState([]);

    const configuration = {
      method: "get",
      url: "https://real-flannel-shirt-bee.cyclic.app/movie/home",
    };

    axios(configuration)
    .then((result)=>{
    setMovies(result);
      })
    .catch((e)=>console.log(e))

    function handleSelect(eventKey) {
        // Update the selected value state with the event key
    setSelectedValue(eventKey);
    console.log(selectedValue)
      }

      // Number of items to display per page
    const itemsPerPage = 20;

  useEffect(()=>{
    // console.log(movies[0])
    if(genre!== "All")
     setMoviess(movies.filter((xxx)=>xxx.genres.includes(genre)))
    else setMoviess(movies)
    if(selectedValue!== "Sort By")
        moviess.sort((a,b)=>-parseFloat(a[selectedValue])+parseFloat(b[selectedValue]));

     // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to only include the items on the current page
  setPageitems(moviess.slice(startIndex, endIndex));
  },[selectedValue,genre,currentPage,moviess,movies])

    return(
        <>
        <Col style={{ backgroundColor: "black", width: '10vw', minWidth:'10vw' }}>
        <ListGroup>
        {genres.map((genree,index)=>(<ListGroupItem active={genre===genree} onClick={()=>setGenre(genree)}>{genree}</ListGroupItem>))}
    </ListGroup>
        </Col>
      <Col style={{ backgroundColor: "darkblue", width:'82vw', minWidth:'82vw', paddingRight:"100", overflow:'auto' }}>
       
 <Row style={{ height: '5vh', minHeight: '5vh', width: '100%', paddingBottom:'10vh',backgroundColor:'darkblue'}}>
            <Col><h1 style={{color: "yellow", whiteSpace: "nowrap" }}>{moviess.length} Movies</h1></Col>
            <Col>{currentPage !== 1 && (
        <Button onClick={() => setCurrentPage(1)} size="sm">First</Button>
      )}</Col>
      <Col >
{currentPage > 1 && (
        <Button onClick={() => setCurrentPage(currentPage - 1)} size="sm">Previous</Button>
      )}</Col>
      <Col>
      {currentPage < moviess.length / itemsPerPage && (
        <Button onClick={() => setCurrentPage(currentPage + 1)} size="sm">Next</Button>
      )}</Col> 
     <Col>{currentPage !== moviess.length / itemsPerPage && (
        <Button onClick={() => setCurrentPage(moviess.length / itemsPerPage)} size="sm">Last</Button>
      )}</Col>
      <Col style={{color:"white"}}>
            <DropdownButton onSelect={handleSelect} title={selectedValue}>
            <Dropdown.Item eventKey={"imdbRating"} active>Rating</Dropdown.Item>
        <Dropdown.Item eventKey={"year"}>Year</Dropdown.Item>
            </DropdownButton>
            </Col>
     
            </Row>

            <Row style={{ height: '85vh', minHeight: '85vh', overflow:'auto', backgroundColor:'darkblue'}}>
         <div className="d-flex container-fluid" style={{flexWrap: "wrap", justifyContent: "space-evenly"}}>
        
        {pageitems.map((movie)=><Movie movie ={movie}/>)}
{/* Add buttons to move between pages */}


</div>        </Row></Col>
<Col style={{ backgroundColor: "darkblue", width:'3vw', minWidth:'3vw' }}></Col>
        </>
    )
}

export default Movielist;