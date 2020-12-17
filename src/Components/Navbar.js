import React, {useState, useEffect} from 'react'
import '../styles/Nav.css';
const image = 'wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
const imageUrl = 'https://image.tmdb.org/t/p/original'

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        applyNavBacckground()
    }, []);

    function applyNavBacckground(){
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener('scroll');
        }
        
    }
    return (
        <div>
          <div className= {`nav ${show && 'nav_black'}`}>
                <img className='nav_brand' src={`${imageUrl}/${image}`} alt='NETFLIX' />
                <div className='nav_brand_right'>
                    <li>login</li>
                </div>
            </div> 
        </div>
    )
}

export default Navbar
