import React, { useEffect, useState } from "react";
import axios from "axios";
//import PropTypes from 'prop-types'
import Loading from "../load/Loading";

const apiUrl = process.env.REACT_APP_API_URL;

const GetMeme = (props) => {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${apiUrl}/gimme/50`);
        const data = await res.data;

        setMemes(data.memes);
      } catch (error) {
        console.error("error fetching memes: ", error);
        console.error("Variável de ambiente REACT_APP_API_URL não definida");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "150px",
          }}
        >
          <Loading />
        </div>
      ) : error ? (
        <p
          style={{
            color: "red",
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: "0 0 0.1rem black",
          }}
        >
          Error: {error.message}
        </p>
      ) : (
        memes.map((meme) => (
          <div key={meme.ups}>
            <img src={meme.url} alt={meme.name} />
            <p>{meme.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

GetMeme.propTypes = {};

export default GetMeme;
