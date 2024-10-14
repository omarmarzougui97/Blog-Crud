import axios from 'axios';

const baseUrl = 'http://localhost:4000/blog/';

const getBlogs = async () => {
    try {
        const response = await axios.get(baseUrl, {
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

const createBlog = async (blogData) => {
    console.log('blogData', blogData);
    try {
        const response = await axios.post(baseUrl, blogData,/* {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }*/)
            .then(() => {
                console.log('Blog created successfully');
            });
        return response.data;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

const updateBlog = async (id, blogData) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, blogData);
        return response.data;
    } catch (error) {
        console.error('Error updating blog:', error);
        throw error;
    }
};

const deleteBlog = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw error;
    }
};

export default {getBlogs, createBlog, updateBlog, deleteBlog};