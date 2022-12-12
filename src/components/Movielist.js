import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Form, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Movie from "./Movie";
import genres from "../genredata";


const Movielist = (props)=>{
  const {movies} = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedValue, setSelectedValue] = useState("Sort By");
    const [genre,setGenre] = useState("All");
    const [pageitems, setPageitems] = useState([]);
    const [moviess,setMoviess] = useState([]);
    const [search,setSearch] = useState("");
 
    // const moviesa = useMemo(() => movies, []);

    // console.log(movies);


    function handleSelect(eventKey) {
        // Update the selected value state with the event key
    setSelectedValue(eventKey);
      }


      // Number of items to display per page
    const itemsPerPage = 20;

  useEffect(()=>{
    // console.log("Hello")
    if(genre!== "All")
     setMoviess(movies.filter((movie)=> movie.genres.includes(genre)))
    else setMoviess(movies)
    setMoviess((prevState)=>prevState.filter((mov)=>mov.title.toLowerCase().includes(search.toLowerCase())))
    if(selectedValue!== "Sort By")
        moviess.sort((a,b)=>-parseFloat(a[selectedValue])+parseFloat(b[selectedValue]));

     // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to only include the items on the current page
  setPageitems(moviess.slice(startIndex, endIndex));
  },[selectedValue,genre,currentPage,moviess,movies,search])

    return(
        <>
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
</Row>
        </>
    )
}

export default Movielist;