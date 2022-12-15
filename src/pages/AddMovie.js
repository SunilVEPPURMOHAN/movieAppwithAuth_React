import axios from "axios";
import React, { useState } from "react";
import {Form ,Button, FormControl, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import Cookies from "universal-cookie";
import { urla } from "../components/fromdb";
import Logos from "../components/Logos";
import genres from "../genredata";

const cookies = new Cookies();

const AddMovie = ()=>{
const [title, setTitle] = useState("");
const [year, setYear] = useState(1900);
const [genree, setGenree] = useState([]);
const [rating,setRating] = useState(5);
const [status, setStatus] = useState("Add your movie");

const token = cookies.get("TOKEN");

const handleSubmit=(e)=>{
    
    e.preventDefault();

    const configuration = {
        method: 'post',
        url: urla + "/movie/createmovies",
        data: {
            title: title,
            genres: [...genree].map(x=>x.innerHTML),
            year:year,
            imdbRating: rating
        },
        headers: {
            Authorization: `Bearer ${token}`
          }
    };

    axios(configuration)
    .then((res)=>{
        // console.log(res);
        // set the cookie
        setStatus(res.data.message);
        // navigate("/home");
           // redirect user to the home page
        // setStatus(result.data.msg);
        // setTimeout(4000);
    })
    .catch((error) => {
        // console.log(error);
        setStatus(error.data.message);
    });

}

return(<>
 <Row style={{ height: '100vh', minHeight: '100vh', flexWrap: "nowrap", overflow:'auto' }}>
        <Col style={{ backgroundColor: "lightsteelblue", width: '5vw',minWidth:'5vw', minHeight:'100vh', position:"fixed", left:'0'}}>
        <Logos/></Col>
        <Col style={{ backgroundColor: "grey", width:'95vw', minWidth:'95vw', position:'fixed', left:'5vw'}}>
<h1>Add your movie details here</h1>
<Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Title:</FormLabel>
        <FormControl type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter your movie title" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Year:</FormLabel>
        <FormControl type="number" value={year} onChange={e=>setYear(e.target.value)} placeholder="Enter the year" />
      </FormGroup>
      <FormGroup>
      <FormLabel>Genre:</FormLabel>
       <FormControl as="select" multiple onChange={e=>setGenree(e.target.selectedOptions)}>
       {genres.filter(gee=>gee!=="All").map(genre => (
      <option key={genre} value={genre}>
        {genre}
      </option>
    ))}
       </FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>IMDB:</FormLabel>
        <FormControl type="number" value={rating} onChange={e=>setRating(e.target.value)} placeholder="imdbRating here" />
      </FormGroup>
     <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
    </Form>
    <h1>{status}</h1>
    </Col>
        </Row>
</>)
}

export default AddMovie;