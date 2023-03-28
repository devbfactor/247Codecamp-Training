import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


const API_URL = 'http://www.omdbapi.com?apikey=a06bd39d';

// const movie1 = {
//     "Title": "Spirited Away",
//     "Year": "2001",
//     "imdbID": "tt0245429",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spirited Away');
    }, []);

    return (
        <div className="app bg-dark">
            <NavBar/>
            <h1 className="title-h1 display-1 text-center my-3 text-danger">MovieLand</h1>

            <Container className="my-5">
            <Row className="justify-content">
                <Col>
                <Form.Control size="lg" className="search text-secondary"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        searchMovies(searchTerm)
                        }}
                    placeholder="Search for movies"/>
                </Col>
            </Row>
            </Container>

            {movies?.length > 0
                ? (
                    <Container className="container">
                    <Row className="row-cols-sm-1 row-cols-md-2 row-cols-md-3 gx-5 gy-5">
                        {movies.map((movie) => (
                            <Col><MovieCard movie={movie}/></Col>
                        ))}
                    </Row>
                    </Container>
                ) : (
                    <Container className="empty text-center text-white py-4 rounded">
                        <p className="display-6">No movies or series found</p>
                    </Container>
                )}

                <footer className="py-5 mt-5 bg-dark">
                    <Container className="px-4">
                        <p className="text-center text-white">Copyright &copy; MovieLand 2023</p>
                        <p className="text-center text-white">This site was created with React & React Boostrap!</p>
                    </Container>
                </footer>
        </div>
    );
}

export default App;