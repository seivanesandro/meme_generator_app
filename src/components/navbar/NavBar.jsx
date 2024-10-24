import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar
      expand="xl"
      sticky="top"
      className="bg-dark mb-auto color-light shadow py-4"
      data-bs-theme="dark"
    >
      <Container className="d-flex flex-row justify-content-center align-items-center text-center">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
