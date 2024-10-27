import React from "react";
//mport PropTypes from 'prop-types'

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const CardMeme = ({ idx, url, name, author, onclick }) => {
  return (
    <>
      <Card style={{ width: "18rem", height: "100%" }} key={idx}>
        <Card.Img variant="top" src={url} alt={name} />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Button
            
            className="btn-style"
            onClick={onclick}
          >
            view
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

CardMeme.propTypes = {};

export default CardMeme;
