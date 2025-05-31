// import axios from "axios";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
//   // عدل المسار حسب مكان ملف store.js
// import { toggleFavorite } from '../redux/store';


// function Home() {
//   const [movieData, setMovieData] = useState([]);
//   const dispatch = useDispatch();

//   // جلب المفضلة من الريدكس
//   const favorites = useSelector((state) => state.favorites.movies);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad"
//       )
//       .then((response) => {
//         setMovieData(response.data.results);
//         console.log(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//       });
//   }, []);

//   // هل الفيلم في المفضلة؟
//   const isFavorite = (movie) => {
//     return favorites.some((fav) => fav.id === movie.id);
//   };

//   // التعامل مع الضغط على زر النجمة
//   const handleToggleFavorite = (movie) => {
//     dispatch(toggleFavorite(movie));
//   };

//   return (
//     <div
//       className="container-fluid py-5"
//       style={{
//         background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)",
//         minHeight: "100vh",
//         color: "white",
//       }}
//     >
//       <h1 className="text-center mb-5 text-danger fw-bold display-4">
//         🎬 Popular Movies
//       </h1>
//       <div className="row g-4 justify-content-center">
//         {movieData.map((film, index) => (
//           <div className="col-md-4 col-lg-3" key={film.id}>
//             <motion.div
//               className="card bg-dark text-white border-0 shadow-lg overflow-hidden"
//               style={{
//                 borderRadius: "20px",
//                 backdropFilter: "blur(10px)",
//                 backgroundColor: "rgba(255, 255, 255, 0.05)",
//                 transition: "transform 0.3s",
//               }}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div className="overflow-hidden" style={{ height: "400px" }}>
//                 <motion.img
//                   src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
//                   alt={film.original_title}
//                   className="card-img-top"
//                   style={{
//                     objectFit: "cover",
//                     height: "100%",
//                     transition: "transform 0.4s ease-in-out",
//                   }}
//                   whileHover={{ scale: 1.1 }}
//                 />
//               </div>
//               <div className="card-body d-flex flex-column p-3">
//                 <h5 className="card-title text-danger fw-bold">
//                   {film.original_title}
//                 </h5>
//                 <p className="card-text text-light small" style={{ flexGrow: 1 }}>
//                   {film.overview.length > 100
//                     ? film.overview.substring(0, 100) + "..."
//                     : film.overview}
//                 </p>

//                 <div className="d-flex justify-content-between align-items-center mt-3">
//                   <motion.div whileHover={{ scale: 1.1 }}>
//                     <Link
//                       to={`/detials/${film.id}`}
//                       className="btn btn-outline-danger fw-semibold"
//                     >
//                       View Details
//                     </Link>
//                   </motion.div>

//                   {/* زرار النجمة للمفضلة */}
//                   <button
//                     onClick={() => handleToggleFavorite(film)}
//                     className={`btn btn-sm ${
//                       isFavorite(film) ? "btn-warning" : "btn-outline-warning"
//                     }`}
//                     title={
//                       isFavorite(film)
//                         ? "Remove from favorites"
//                         : "Add to favorites"
//                     }
//                   >
//                     {isFavorite(film) ? "★" : "☆"}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;






















import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { increice } from '../Store/CountSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [movieData, setMovieData] = useState([]);
   const dispatch = useDispatch()
  const dropMenu = useSelector(state => state.forlunguge.lan)
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad&language=${dropMenu}`)
      .then((response) => {
        setMovieData(response.data.results);
        console.log(response.data.results)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [dropMenu]);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 className="text-center mb-5 text-danger fw-bold display-4">🎬 Popular Movies</h1>
      <div className="row g-4 justify-content-center">
        {movieData.map((film, index) => (
          <div className="col-md-4 col-lg-3" key={film.id}>
            <motion.div
              className="card bg-dark text-white border-0 shadow-lg overflow-hidden"
              style={{
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: "transform 0.3s",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="overflow-hidden" style={{ height: '400px' }}>
                <motion.img
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                  alt={film.original_title}
                  className="card-img-top"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    transition: "transform 0.4s ease-in-out",
                  }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="card-body d-flex flex-column p-3">
                <h5 className="card-title text-danger fw-bold">{film.original_title}</h5>
                <p className="card-text text-light small" style={{ flexGrow: 1 }}>
                  {film.overview.length > 100
                    ? film.overview.substring(0, 100) + "..."
                    : film.overview}
                </p>
                    <motion.div whileHover={{ scale: 1.1 }}>
            <Link
                to={`/detials/${film.id}`}
                className="btn btn-outline-danger mt-3 fw-semibold"
            >
                View Details
            </Link>

            <motion.div onClick={()=>{
             dispatch( increice(film ))                       
            }}
               
                className="btn btn-outline-danger mt-3 fw-semibold"
            >
                incise
            </motion.div>
            </motion.div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
