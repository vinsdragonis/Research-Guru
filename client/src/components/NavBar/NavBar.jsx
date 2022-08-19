import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="NavBar">
      	<Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
			<Container>
				<Navbar.Brand className="brand" href="#">
					<b>Research Guru</b>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link className="link" href="#home">Home</Nav.Link>
					<Nav.Link className="link" href="#about">About us</Nav.Link>
					<Nav.Link className="link" href="#features">Features</Nav.Link>
				</Nav>
				<Form className="search d-flex">
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
					/>
					<Button variant="outline-light">Search</Button>
				</Form>
				<Nav>
					<Nav.Link className="link" href="#login">Login</Nav.Link>
					<Nav.Link className="link" href="#register">Register</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    </div>
  );
};
