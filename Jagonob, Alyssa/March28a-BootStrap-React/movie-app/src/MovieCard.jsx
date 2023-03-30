import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from "react-bootstrap";

const MovieCard = ({movie}) => {
    return(                  
      <Card className="my-5 mx-3" bg="secondary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Poster!== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
          <p>{movie.Year}</p>
          <span>{movie.Type}</span>
          </Card.Text>
          
        </Card.Body>
      </Card> 
    )
}

export default MovieCard