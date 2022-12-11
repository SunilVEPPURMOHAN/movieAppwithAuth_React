import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import genres from "../genredata";

const Genre = ()=>{

return(
    <>
    <ListGroup>
        {genres.map((genre,index)=>(<ListGroupItem key={index}>{genre}</ListGroupItem>))}
    </ListGroup>
    </>
)
}

export default Genre;