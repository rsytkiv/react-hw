import React from 'react';
import './Skeleton.css';
import { Link } from 'react-router-dom'
import Button from './UI/Button';
import { useHistory } from 'react-router';

function Skeleton() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("authenticated")
        history.push("/login")
    }

    return (
        <div>
            <div className='navbar'>
                <ul className='navUl'>
                    <li><Link to='/general'>Home</Link></li>
                    <li><Link to='/people'> People</Link></li>
                    <li><Link to='/favorite'>Favorites</Link></li>
                </ul>
            </div>
            <div className='buttonCenter'>
                <Button buttonType='primary' small bordered margins onClick={logout}>Log out</Button>
            </div>
        </div>
        
    )
}

export default Skeleton
