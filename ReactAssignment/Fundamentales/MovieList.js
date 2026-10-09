
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setMovies(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load movies.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Movie List</h2>

      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}

export default MovieList;
