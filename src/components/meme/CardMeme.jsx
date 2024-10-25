import React from 'react'
//mport PropTypes from 'prop-types'

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const CardMeme = ({idx, url, name, author}) => {
  return (
    <>
      <Card style={{width: "18rem", height:'100%'}} key={idx}>
        <Card.Img variant="top" src={url} alt={name} />
        <Card.Body className='d-flex flex-column justify-content-center text-center'>
          <Card.Title>
            <p>{author}</p>
          </Card.Title>
          <Button data-bs-theme="dark" className="btn btn-info">
            view
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

CardMeme.propTypes = {}

export default CardMeme