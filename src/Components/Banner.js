import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Requests from './Requests';
import '../styles/Banner.css';
// const imageUrl = 'https://image.tmdb.org/t/p/original/'

function Banner() {
    const [banner, setBanner] = useState([]);
    useEffect(()=>{
        const fetchBanner = async()=>{
            const request =  await axios.get(Requests.fetchTrendingUrl)
            setBanner(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
           return request; 
        }
        fetchBanner();
    }, []);
    
    const trucacte = (str, n)=>{
        if(str?.length > n){
            return `${str.substring(0, n)}...`;
        }
        return `${str}...`
    }

    return (
        <header className='banner' 
        style={{
            backgroundSize:'cover',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`,
            backgroundPosition:'center center',
        }}>
           <div className='banner_content'>
               <h1>{banner?.title} </h1>
               <div className='banner_buttons'>
                 <button className='banner_button'>play</button>
                 <button className='banner_button'>list</button>
                </div>
                 <p className='banner_description'>{trucacte(banner?.overview, 150)}</p>
             </div>
             <div className='banner_fadeBottom' />
        </header>
    )
}

export default Banner
