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
       })
  }
)
  return (
    <div className='navbar'>
       <img className='logo' src={logo} alt="Site logo" />
       <img className='avathar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avathar'/>
       <div className='content'>
       <h1 className='tittle'>{movie?.title}</h1>

          <div className='buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
          </div>
          <h1 className='discription'>A slow zoom-in shot focuses on a handwritten letter lying on a table, smudged with teardrops. The camera lingers on the ink bleeding into the paper, symbolizing the emotional weight of the moment.</h1>
       </div>
       <div className="fade"></div>
    </div>
  )
}

export default NavBar
