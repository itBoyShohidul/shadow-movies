import React from "react";
import { Link } from "react-router-dom";

function Movie({ props }) {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const { poster_path, original_title, title, vote_average } = props;
  const propsValue = props;
  const slug = original_title.split(" ").join("-").toLowerCase();
  return (
    <div className="movie">
      <img src={IMGPATH + poster_path} alt={title} />
      <Link to={`/movie/${slug}`} state={propsValue}>
        <h3>{original_title}</h3>
      </Link>

      <div className="movie-desc">
        <p>{title}</p>
        <h5>{vote_average}</h5>
      </div>
    </div>
  );
}

export default Movie;
