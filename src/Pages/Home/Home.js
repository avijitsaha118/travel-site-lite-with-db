import React from 'react';
import Blogs from '../Blogs/Blogs';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='mt-5'>
                    <Blogs></Blogs>
                </div>
            </div>
        </div>
    );
};

export default Home;