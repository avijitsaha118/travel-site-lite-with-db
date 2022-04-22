import React, { useEffect, useState } from 'react';
import Blog from '../Home/Blog/Blog';

const Services = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h2>Our Blog</h2>
            {
               blogs.map(blog=><Blog
               key={blog._id}
               blog={blog}
               >
               </Blog>
                )
            }
        </div>
    );
};

export default Services;