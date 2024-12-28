import './NavBar.css';
import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/Netflix_Logo_PMS.png';
import axios from '../../axios';
import { API_KEY } from '../../constants/constants';
function NavBar() {
  const [movie, setMovie]=useState()

  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[0])
      });
    }, []); // Dependency array to avoid infinite loop
  
    const backgroundImage = movie
    ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    : `url('../../assets/images/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg')`;

  return (
    <div className='navbar'
    style={{
      backgroundImage: backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh',
      width: '100%',
      color: 'white',
    }}>
       <img className='logo' src={logo} alt="Site logo" />
       <img className='avathar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avathar'/>
       <div className='content'>
       <h1 className='tittle'>{movie?.name || 'Loading...'}</h1>

          <div className='buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
          </div>
          <h1 className='discription'>{movie?.overview}</h1>
       </div>
       <div className="fade"></div>
    </div>
  )
}

export default NavBar
