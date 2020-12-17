import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const imageUrl = 'https://image.tmdb.org/t/p/original'


function Row(props) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailer] = useState('');

    useEffect(()=>{
        const fetchMovies = async()=>{
            const request = await axios.get(props.fetchUrl);
            setmovies(request.data.results);
            return request;
          }
          fetchMovies();
    },[props.fetchUrl]);

    const opts = {
        height: '400',
        width: '100%',
        playerVar: {
            autoplay: 1,
        }

    }

   const handleClick = (movie)=>{
       if(trailerUrl){
           setTrailer('');
       }else{
           movieTrailer(movie?.title || '')
           .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailer(urlParams.get('v'));
           })
           .catch((err)=>{
               console.log(err);
           })
       }
   }
   
    const displayMovies = movies.map((movie)=>(
          <img 
          className={`row_poster ${props.isLargeRow && 'row_posterLarge'}`} 
          onClick={()=>{handleClick(movie)}}
          key={movie.id} src={`${imageUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
          alt={movie.title} />  
    ));

    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className='row_posters'>
                {displayMovies}
            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
