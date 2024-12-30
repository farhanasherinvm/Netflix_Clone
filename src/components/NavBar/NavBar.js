import './NavBar.css';
import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/Netflix_Logo_PMS.png';
import axios from '../../axios';
import { API_KEY , baseimageUrl} from '../../constants/constants';
function NavBar() {
  const [movie, setMovie]=useState()

  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        const results=response.data.results
        const randomintex=Math.floor(Math.random() * results.length);
        console.log(response.data.results[5])
        setMovie(response.data.results[randomintex])
      });
    }, []);
  
    
  return (
    <div className='navbar'
    style={{
      backgroundImage:`url(${baseimageUrl+movie?.backdrop_path || ""})`
    }}>
       <img className='logo' src={logo} alt="Site logo" />
       <img className='avathar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avathar'/>
       <div className='content'>
       <h1 className='tittle'>{movie?.name || movie?.title ||'Loading...'}</h1>

          <div className='buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
          </div>
          <h1 className='discription'>{movie?.overview || ""}</h1>
       </div>
       <div className="fade"></div>
    </div>
  )
}

export default NavBar
