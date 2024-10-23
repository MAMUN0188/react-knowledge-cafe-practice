import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='w-2/3'>
            {
                blogs.map((blog, idx) => <Blog handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks} key={idx} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;