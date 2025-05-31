

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { togel } from '../Store/langugeSlice';

function Nav() {
 // const favoritesCount = useSelector(state => state.favorites.movies.length);
  const favoritesCount = useSelector(state => state.star.move.length )
  const chengeLange = useSelector(state => state.forlunguge)
  const  disbatch  = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Move
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* روابط تسجيل الدخول والتسجيل */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Register">
                Register
              </Link>
            </li>

            {/* رابط صفحة المفضلة */}
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Favorites <span className="badge bg-danger">{favoritesCount}</span>
              </Link>
            </li>
            {/* ////////////////////////////////////// */}
            <li className='nav-item'>
              
             
             
                <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={() => {
                  disbatch(togel())
                   }}>
                  { chengeLange.lan }
                </Dropdown.Toggle>

               
             
              

    

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;















// import { Link } from "react-router-dom";
// function Nav(){
// return (
// <>

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">
//       Move
//     </Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="Login">
//           Login
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="Register">
//           Register
//           </Link>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>
// </>
// )
// }

// export default Nav