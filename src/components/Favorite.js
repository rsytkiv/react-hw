import React from 'react'
import Skeleton from './Skeleton'
import meme1 from '../images/meme1.jpg'
import meme2 from '../images/meme2.jpg'
import meme3 from '../images/meme3.jpg'
import meme4 from '../images/meme4.jpg'
import meme5 from '../images/meme5.jpg'
import meme6 from '../images/meme6.jpg'
import meme7 from '../images/meme7.jpg'
import meme8 from '../images/meme8.jpg'
import meme9 from '../images/meme9.jpg'

function Favorite() {
    return (
        <div className='favoriteContainer'>
            <Skeleton />
            Я встиг реалізувати тільки один лайкнутий пост - {localStorage.getItem('liked')} 
            <br></br>
            Щоб сторінка не була пустою, я накидаю мемів 
            <div className="memes">
               <img src={meme1} alt=""  className='memeImg'/>
               <img src={meme2} alt=""  className='memeImg'/>
               <img src={meme3} alt=""  className='memeImg'/>
               <img src={meme4} alt=""  className='memeImg'/>
               <img src={meme5} alt=""  className='memeImg'/>
               <img src={meme6} alt=""  className='memeImg'/>
               <img src={meme7} alt=""  className='memeImg'/>
               <img src={meme8} alt=""  className='memeImg'/>
               <img src={meme9} alt=""  className='memeImg'/>

            </div>
        </div>
    )
}

export default Favorite
