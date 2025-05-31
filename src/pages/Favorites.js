import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove1 } from '../Store/CountSlice';
import './favorites.css';

function Favorites() {
  const favorites = useSelector(state => state.star.move);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <h3 className="text-center mt-5 text-white">No favorite movies yet.</h3>;
  }

  return (
    <div className="favorites-container">
      <div className="container py-5">
        <h1 className="mb-4 fw-bold text-danger">Your Favorite Movies</h1>
        <div className="row g-4">
          {favorites.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <div className="card movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-danger">{movie.original_title}</h5>
                  <button
                    onClick={() => dispatch(remove1(movie.id))}
                    className="btn btn-danger me-2"
                  >
                    Remove
                  </button>
                  <Link to={`/detials/${movie.id}`} className="btn btn-outline-danger">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
