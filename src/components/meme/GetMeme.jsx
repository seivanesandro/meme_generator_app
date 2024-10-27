import React, { useEffect, useState } from "react";
import axios from "axios";
//import PropTypes from 'prop-types'
import Loading from "../load/Loading";
import CardMeme from "../meme/CardMeme";
import styled, { keyframes } from "styled-components";
import { devices } from "../../utils/constantes";
import Meme from "./Meme";

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

const ContainerCardsMemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 4rem;
  padding-left: 5rem;
  animation: ${Show} 3s ease-out;

  @media only screen and (${devices.portatilL}) {
    padding-left: 3rem;
  }
  @media only screen and (${devices.portatil}) {
    gap: 2rem;
    padding-left: 3rem;
  }
  @media only screen and (${devices.portatilS}) {
    gap: 7rem;
    padding-left: 5rem;
  }

  @media only screen and (${devices.tablet}) {
    gap: 3rem;
    padding-left: 5rem;
  }
  @media only screen and (${devices.iphone14}) {
    gap: 6rem;
    padding-left: 3rem;
  }
  @media only screen and (${devices.mobileG}) {
    gap: 6rem;
    padding-left: 4rem;
  }
  @media only screen and (${devices.mobileM}) {
    gap: 6rem;
    padding-left: 3rem;
  }
  @media only screen and (${devices.mobileP}) {
    gap: 9rem;
    padding-left: 1rem;
  }
`;

const ContainerComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 122px;

  @media only screen and (${devices.fourk}) {
    margin-right: 100px;
  }
  @media only screen and (${devices.portatilL}) {
    margin-right: 58px;
  }
  @media only screen and (${devices.portatil}) {
    margin-right: 60px;
  }
  @media only screen and (${devices.tablet}) {
    margin-right: 85px;
  }
  @media only screen and (${devices.iphone14}) {
    margin-right: 60px;
  }
  @media only screen and (${devices.mobileG}) {
    margin-right: 60px;
  }
  @media only screen and (${devices.mobileM}) {
    margin-right: 48px;
  }
  @media only screen and (${devices.mobileP}) {
    margin-right: 7px;
  }
`;

const ErrorStyle = styled.p`
  color: red;
  text-align: center !important;
  text-transform: uppercase;
  text-shadow: 0 0 0.1rem black;
  margin-right: 7px;
  font-size: 1.1rem;

  @media only screen and (${devices.tablet}) {
    margin-right: 5px;
  }
  @media only screen and (${devices.iphone14}) {
    margin-right: 6px;
    font-size: 0.8rem;
  }
  @media only screen and (${devices.mobileG}) {
    margin-right: 6px;
    font-size: 0.8rem;
  }
  @media only screen and (${devices.mobileM}) {
    margin-right: 6px;
    font-size: 0.7rem;
  }
  @media only screen and (${devices.mobileP}) {
    margin-right: 6px;
    font-size: 0.8rem;
  }
`;

const apiUrl = process.env.REACT_APP_API_URL;

const GetMeme = (props) => {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);
  const [memeData, setMemeData] = useState();

  useEffect(() => {
    const fetchMemes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${apiUrl}/gimme/50`);
        const data = await res.data;

        setMemes(data.memes);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemes();
  }, []);

  return (
    <>
      <ContainerCardsMemes className="container-cards-memes">
        {isLoading ? (
          <ContainerComponents className="loading-meme">
            <Loading />
          </ContainerComponents>
        ) : error ? (
          <ContainerComponents className="error-meme">
            <ErrorStyle>Error: {error.message}</ErrorStyle>
          </ContainerComponents>
        ) : (
          show !== true &&
          memes.map((meme, idx) => {
            return (
              <CardMeme
                key={idx}
                url={meme.url}
                name={meme.title}
                onclick={() => {
                  setShow(true);
                  setMemeData(meme);
                }}
              />
            );
          })
        )}
      </ContainerCardsMemes>
      {show === true && <Meme memeData={memeData} setShow={setShow} />}
    </>
  );
};

GetMeme.propTypes = {};

export default GetMeme;
