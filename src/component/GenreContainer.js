import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "./Content";
import { api_key, fetchGenres } from "./api";

function GenreContainer() {
  const { genreId } = useParams();
  const [contents, setContents] = useState([]);
  const [genreList, setGenreList] = useState({});

  useEffect(() => {
    fetchGenres(setGenreList);
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}`)
      .then(response => {
        setContents(response.data.results);
      });
  }, [genreId]);

  return (
    <div className="genre-container">
      {contents.map(content => (
        <Content 
          key={content.id}
          id={content.id}
          year={content.release_date.split("-")[0]}
          title={content.title}
          summary={content.overview}
          poster={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
          genres={content.genre_ids.map(id => genreList[id])}
        />
      ))}
    </div>
  );
}

export default GenreContainer;