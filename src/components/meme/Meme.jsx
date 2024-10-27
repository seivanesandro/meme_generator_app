import React from "react";
//import PropTypes from 'prop-types'
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import { devices } from "../../utils/constantes";

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;
const ContainerMeme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  margin: 5rem 0.5rem 4rem 0.5rem;
  animation: ${Show} 2s ease-out;

  @media only screen and (${devices.tablet}) {
    align-items: center;
  }
  @media only screen and (${devices.iphone14}) {
    align-items: center;
  }
  @media only screen and (${devices.mobileG}) {
    align-items: center;
  }
  @media only screen and (${devices.mobileM}) {
    align-items: center;
  }
  @media only screen and (${devices.mobileP}) {
    align-items: center;
  }
`;
const StyledImg = styled.img`
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 0.3rem #99f2c8;
  }
`;
const StyleCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 0.4rem;
  gap: 2rem;

  @media only screen and (${devices.tablet}) {
    align-items: flex-start;
    margin-left: 0;
  }
  @media only screen and (${devices.iphone14}) {
    align-items: flex-start;
    margin-left: 0;
  }
  @media only screen and (${devices.mobileG}) {
    align-items: flex-start;
    margin-left: 0;
  }
  @media only screen and (${devices.mobileM}) {
    align-items: flex-start;
    margin-left: 0;
  }
  @media only screen and (${devices.mobileP}) {
    align-items: flex-start;
    margin-left: 0;
  }
`;
const StyleAuthor = styled.span`
  font-weight: normal;
  font-size: 1.3rem;
  color: #73efb5;

  &:hover {
    color: #4defa3;
    text-shadow: 0 0 0.5rem #4defa3;
  }
`;
const StyleMemePostLink = styled.a`
  font-weight: normal;
  font-size: 1.3rem;
  color: #73efb5;
  cursor: pointer;

  &:hover {
    color: #4defa3;
    text-shadow: 0 0 0.5rem #4defa3;
  }
`;
const ContainerCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Meme = ({ memeData, setShow }) => {
  return (
    <>
      <ContainerMeme className="meme">
        <StyledImg src={memeData.url} alt="" className="card-img-top" />
        <StyleCardBody className="card-body">
          <strong title={memeData.author}>
            Author: <StyleAuthor> {memeData.author}</StyleAuthor>
          </strong>

          <strong title="Click to go">
            Link:{" "}
            <StyleMemePostLink
              href={memeData.postLink}
              target="_blank"
              rel="noreferrer"
              className="meme-post-link"
            >
              {memeData.postLink}
            </StyleMemePostLink>
          </strong>
          <ContainerCardFooter className="card-footer">
            <Button
              type="button"
              className="btn-style"
              onClick={() => {
                setShow(false);
              }}
            >
              Back
            </Button>
          </ContainerCardFooter>
        </StyleCardBody>
      </ContainerMeme>
    </>
  );
};

Meme.propTypes = {};

export default Meme;
