import React from 'react';

function List(props) {
  let filteredMovieList = props.movieList.filter(movie=>movie.genre === props.genre);
  return (
    <div>
      <h3>{props.genre}</h3>
      <ul>
        {filteredMovieList.map((movie) => (
          <li key={movie.title}>
            {movie.title} ({movie.genre})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
