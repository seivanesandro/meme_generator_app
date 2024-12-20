import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from "react-responsive";
import memeface from '../../assets/memeface.png'
import styled from "styled-components";

const StyledMemeImg = styled.img`
  width: 4rem;
`;

const NavBar = () => {
  //TODO: useMediaQuery a librarie to use responnsive breack-poinnts with ES6
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Navbar
      expand="xl"
      fixed={`${isMobile ? "bottom" : "top"}`}
      className={`bg-dark color-light shadow py-2 ${isMobile ? "" : "mb-xl-5"}`}
      data-bs-theme="dark">
      <Container className="d-flex flex-row justify-content-center align-items-center text-center">
        <Navbar.Brand
          onClick={handleClick}
          className="button-reload d-flex flex-column align-items-center justify-content-center text-center mr-0"
          style={{marginRight: "0"}}>
          <StyledMemeImg src={memeface} alt="" title="click to reload memes" />
          <span>More Memes</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
