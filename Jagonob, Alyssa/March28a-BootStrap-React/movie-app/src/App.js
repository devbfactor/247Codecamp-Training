import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, Form, Row, Col } from "react-bootstrap";

import SearchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_KEY}`;

const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <Container fluid>
      <div className="app text-white text-center my-5 ">
        <h1 className="text-info">MovieLandia</h1>
        <Row className="justify-content-md-center">
          <Col md="auto" className="py-5">
            <div className="search">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search for movies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroup.Text id="basic-addon2">
                  <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                  />
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>
        </Row>

        {movies?.length > 0 ? (
          <Row className="justify-content-center">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </Row>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </Container>
  );
};

export default App;
