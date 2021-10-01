import React, {useState} from 'react'
import Skeleton from './Skeleton';
import { getAuth, updateProfile } from "firebase/auth";
import Button from './UI/Button';


function People() {
    const auth = getAuth();

    const [photo, setPhoto] = useState('No photo');
    const [error, setError] = useState(null);

    async function updatePhoto() {
        try {
            setError(null)
            await updateProfile(auth.currentUser, {
                photoURL: photo
            }).then(() => {
                console.log('updated')
                localStorage.setItem('photo', photo);
                console.log(localStorage.getItem('photo'))
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
            
        } catch(error) {
            setError(error.message)
        }
        window.location.reload()
    }
    
    return (
        <div>
            <Skeleton />
            <div className='authUsers'>
                <div className='marginsNeeded'><h1>Your account</h1></div>
                <div className='marginsNeeded'>Email - {localStorage.getItem('email')}<br></br></div>
    
                <div className='marginsNeeded'>Name - {localStorage.getItem('name')}<br></br></div>
    
                <div className='marginsNeeded'>Photo - <div><img src={localStorage.getItem('photo')} className='userPhoto'/></div> <br></br></div>
    
                <div className='marginsNeeded'>Write photo url</div>
                <input type="text" name="photo" value={photo} onChange={e => setPhoto(e.target.value)} className='loginInput' />
                <Button type='submit' onClick={updatePhoto}>Update</Button>
            </div>
        </div>
    )
}

export default People
