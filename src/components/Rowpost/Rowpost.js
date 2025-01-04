import { useState ,useEffect} from "react";
import React from "react";
import "./Rowpost.css";
import axios from "axios";
import Youtube from "react-youtube"
import {baseimageUrl,API_KEY,baseUrl} from '../../constants/constants';
function Rowpost(props) {
  const [movies, setmovies]=useState([])
  const [urlId, seturlId]= useState("")

  useEffect(()=>{

    axios.get(props.url).then(response => {
      console.log(response.data)
      setmovies(response.data.results)
    }).catch((err)=>{
      // alert("Network Error")

    })
  },[]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const handleMovie=((id)=>{
       console.log(id)
       axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        if (response.data.results!==0){
          seturlId(response.data.results[0])
        }else{
          console.log("Not Available")
        }
       })
   }
  )

  return (
    <div className="row">
      <h1>{props.title}</h1>

      <div className="posters">
        {movies.map((obj)=>

      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? "smallposter":"poster"}src={`${baseimageUrl+obj.backdrop_path}`} alt="poster"/>
      )}
        
       
      </div>
      <div className="vedio">
   {  urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
   </div>
    </div>
    
  );
}

export default Rowpost;
