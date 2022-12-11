import React from "react";
import { Container , Card } from "react-bootstrap";


const Movie = (props)=>{
    const movie = props.movie;
    const url = `https://m.media-amazon.com/images/M/${movie.poster}`
    return(
      <>
    <div className="App" title={movie.title}>  
    <Container className='p-4 col-sm-12' title={movie.title} style={{width:"200px"}} >  
    <Card className="flex-fill" title={movie.title}>

  <Card.Img variant="top" src={url} className="img-fluid" title={movie.title}/>  
  <Card.Body title={movie.title}>  
    {/* <Card.Title title={movie.title}>{movie.title} ({movie.year})</Card.Title>   */}
    <Card.Subtitle className="mb-2 text-muted" title={movie.title}>{movie.title}</Card.Subtitle>
  <Card.Text title={movie.title}>  
   IMDB {movie.imdbRating}
    </Card.Text>
    </Card.Body> 
    </Card>
</Container>  
    </div>  
    </>
);
}

export default Movie;