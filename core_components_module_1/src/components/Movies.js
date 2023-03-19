import React from 'react';
import List from './List';
import './Movies.css'
function Movies() {
  const [chosenGenre, setChosenGenre] = React.useState('drama');
  const [movieList] = React.useState([
    { title: 'RRR', genre: 'action' },
    { title: 'Black Swan', genre: 'drama' },
    { title: 'Inception', genre: 'science-fiction' },
    { title: 'Naidu', genre: 'crime' },
  ]);
  const setGenre = (event) => {
    setChosenGenre(event.target.innerHTML);
  };

  return (
    <div >
      <ul className="Movies">
        {movieList.map((movie) => (
          <li key={movie.title} onClick={setGenre}>
            {movie.genre}
          </li>
        ))}
      </ul>
      <List genre={chosenGenre} movieList={movieList}></List>
    </div>
  );
}

export default Movies;
