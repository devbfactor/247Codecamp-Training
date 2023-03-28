import React from 'react'
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie" sm="auto">
      <Card.Header className="text-uppercase">{movie.Type}</Card.Header>
      <Card.Img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://dummyimage.com/480x640'} alt={movie.Title} />
      <Card.Body>
            <Card.Text>{movie.Year}</Card.Text>
            <Card.Title>{movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default MovieCard