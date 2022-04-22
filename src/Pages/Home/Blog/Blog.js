import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({blog}) => {
    const {_id, name, img, description, price} = blog;

    const navigate = useNavigate();

    const navigateToBlogDetail = id =>{
        navigate(`/blog/${id}`);
    }
    
    return (
        <div>
            <h1>Blog Story</h1>
            <img className='w-100' src={img} alt='' />
            <h2>
                {name}
            </h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Blog;