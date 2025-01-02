import { useState ,useEffect} from "react";
import React from "react";
import "./Rowpost.css";
import axios from "axios";
import {API_KEY,baseUrl,baseimageUrl} from '../../constants/constants';
function Rowpost() {
  const [movies, setmovies]=useState([])

  useEffect(()=>{

    axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch((err)=>{
      // alert("Network Error")

    })
  },[]);


  return (
    <div className="row">
      <h1>Tittle</h1>

      <div className="posters">
        {movies.map((obj)=>

      <img className="post" src={`${baseimageUrl+obj.backdrop_path}`} alt="poster"/>
    )}
        
       
      </div>
    </div>
  );
}

export default Rowpost;
