// Dependancies
import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

//Internals
import Movie from "../components/Movie";
import searchContext from "../context/searchContext";
import Loading from "./Loading";

function Movies() {
  const [movie, setMovie] = useState([]);
  const contextValue = useContext(searchContext);
  const { search } = contextValue;

  //Get all Movies
  const getAllMovies = () => {
    axios(process.env.REACT_APP_MOVIE_API)
      .then((data) => setMovie(data.data.results))
      .catch((err) => console.log(err));
  };

  // Get searched movies
  const getSearchedMovies = () => {
    axios(`${process.env.REACT_APP_SEARCH_API}${search}`)
      .then((data) => setMovie(data.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className="movie-container">
      {movie.length === 0 ? (
        <Loading />
      ) : (
        movie.map((item) => <Movie key={item.id} props={item} />)
      )}
    </div>
  );
}

export default Movies;
