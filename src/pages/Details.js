import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


const TinSoldierDetails = () => {
    const id =useParams().id
    useEffect(() => {
        // 'https://api.themoviedb.org/3/movie/977294?language=en-US&api_key=29cf44b93ca83bf48d9356395476f7ad';
        axios
          .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=29cf44b93ca83bf48d9356395476f7ad`)
          .then((response) => {
            setmove(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            console.error("Error fetching movies:", error);
          });
      }, []);
    
       const [movie ,setmove] = useState({
    

        title: "Tin Soldier",
        poster_path: "/lFFDrFLXywFhy6khHes1LCFVMsL.jpg",
        backdrop_path: "/jRvhP4AfFnJ03lCQhp1fie7XPSd.jpg",
        overview:
          "An ex-special forces operative seeks revenge against a cult leader who has corrupted his former comrades, the Shinjas...",
        genres: ["Action", "Thriller"],
        release_date: "2025-05-22",
        runtime: 87,
        production_countries: ["United States", "United Kingdom"],
        vote_average: 5.2,
       })

       const [show , setshow]  = useState (false)
//   const movie = {
//     title: "Tin Soldier",
//     poster_path: "/lFFDrFLXywFhy6khHes1LCFVMsL.jpg",
//     backdrop_path: "/jRvhP4AfFnJ03lCQhp1fie7XPSd.jpg",
//     overview:
//       "An ex-special forces operative seeks revenge against a cult leader who has corrupted his former comrades, the Shinjas...",
//     genres: ["Action", "Thriller"],
//     release_date: "2025-05-22",
//     runtime: 87,
//     production_countries: ["United States", "United Kingdom"],
//     vote_average: 5.2,
//   };

  return (
    
    <div
      className="text-white min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "30px",
      }}
    >
      <div
        className="card bg-dark bg-opacity-75 text-light animate__animated animate__fadeInUp shadow-lg"
        style={{ maxWidth: "900px", borderRadius: "20px" }}
      >
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid rounded-start h-100"
              alt={movie.title}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title mb-3">{movie.title}</h2>
              <p className="card-text mb-2">
                <strong>Genres:</strong> {movie.genres.map(

                (item) => {
                    return item.name+" ,"
                }
                )}
              </p>
              <p className="card-text mb-2">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p className="card-text mb-2">
                <strong>Runtime:</strong> {movie.runtime} mins
              </p>
              <p className="card-text mb-2">
                <strong>Countries:</strong> {movie.production_countries.map((item) => {
                    return item.name
                })}
              </p>
              <p className="card-text mb-3">
                <strong>Rating:</strong> ⭐ {movie.vote_average}/10
              </p>
              <p className="card-text" style={{ fontSize: "0.95rem" }}>{movie.overview}</p>
              <a href="#" className="btn btn-danger mt-3">
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinSoldierDetails;