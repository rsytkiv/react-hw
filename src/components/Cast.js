import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Skeleton from './Skeleton';
import axios from "axios";
import './Cast.css'
import Pagination from './Pagination/Pagination';
import { getCurrentUser } from '../utils/helpers';
import Button from './UI/Button';
import { database } from '../database';

const itemsPerPage = 20;

const Cast = () => {
    
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const currUser = getCurrentUser()

    useEffect(() => {
        if (!items) return
        items.forEach(item => database.posts.push(item))
    }, [items])
    
    const handleAddToFavorite = (id) => {
        localStorage.setItem('liked', id);
    }

    
    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const showPagination = items?.length > itemsPerPage
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems =  items.slice(firstItemIndex, lastItemIndex);

    return (
        <div className='generalContainer'>
            <Skeleton />
            
            
            <div className="items">
            {
                currentItems.map(item => 
                <div key={item.id} className='item'>
                    <a href={item.url}><img src={item.image.medium} alt={item.name + " image"} className="itemImage"/></a> 
                    <div className='filmName'>
                        <a href={item.url} className='black'>{item.name}</a>
                    </div> 
                    <Button buttonType="primary" small bordered onClick={() => handleAddToFavorite(item.name)}>Add to Favorites</Button>
                </div>)
                
            }
            <div className="d-flex">
                {showPagination && (
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items?.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            )}
            </div>
             
        </div>
            
        </div> 
    )
}

export default Cast
