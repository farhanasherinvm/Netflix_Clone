import { useState ,useEffect} from "react";
import React from "react";
import "./Rowpost.css";
import axios from "axios";
import {baseimageUrl} from '../../constants/constants';
function Rowpost(props) {
  const [movies, setmovies]=useState([])

  useEffect(()=>{

    axios.get(props.url).then(response => {
      console.log(response.data)
      setmovies(response.data.results)
    }).catch((err)=>{
      // alert("Network Error")

    })
  },[]);


  return (
    <div className="row">
      <h1>{props.title}</h1>

      <div className="posters">
        {movies.map((obj)=>

      <img className={props.isSmall? "smallposter":"poster"}src={`${baseimageUrl+obj.backdrop_path}`} alt="poster"/>
    )}
        
       
      </div>
    </div>
  );
}

export default Rowpost;
