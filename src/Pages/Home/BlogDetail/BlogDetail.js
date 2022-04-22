import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/blog/${blogId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);
    return (

        <div>
            <h3>Your Blog Name: {blogId}</h3>
            <div>
                <Link to="/publish">
                    <button>Publish your Blog</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogDetail;