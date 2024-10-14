import React, {useEffect, useState} from 'react';
import services from '../services/blogService';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await services.getBlogs();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs().then(() => {
            console.log('Blogs fetched successfully');
        });
    }, []);

    return (
        <div>
            <h1>Blogs List</h1>

            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <p>{blog.image}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;