import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import MovieCard from '../MovieCard';
import './Mdbs.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=887229cc';;

const Mdbs = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">MovieLand</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="form1 justify-content-end">
                                <Form.Control
                                    type="search"
                                    className="form2 me-2"
                                    aria-label="Search"
                                    placeholder='Search for Movies'
                                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}

                                />
                                <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {
                movies?.length > 0 ?
                    (
                        <Container className="container">
                            <Row>
                                {movies.map((movie) => (
                                    <Col><MovieCard movie={movie} /></Col>
                                ))}
                            </Row>
                        </Container>
                    ) :
                    (
                        <div className="empty">
                            <h2> No movies found! </h2>
                        </div>
                    )
            }

            <main>

            </main>



        </>
    )
}


export default Mdbs
