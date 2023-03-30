import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image src="https://picsum.photos/900/400" fluid rounded />
            </Col>
            <Col sm={5}>
              <h1 className="font-weight-light">Tagline</h1>
              <p className="mt-4">
                Documentation and examples for opting images into responsive
                behavior (so they never become wider than their parent) and add
                lightweight styles to them—all via classes. Documentation and
                examples for opting images into responsive behavior (so they
                never become wider than their parent) and add lightweight styles
                to them—all via classes.
              </p>
              <Button variant="outline-primary">Call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                Documentation and examples for opting images into responsive
                behavior (so they never become wider than their parent) and add
                lightweight styles to them—all via classes.{" "}
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/201/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/320/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/220/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; Your website 2037
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
