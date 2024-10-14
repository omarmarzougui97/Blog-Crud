import React from 'react';
import {useParams} from 'react-router-dom';

const UpdateBlog = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Update Blog {id}</h1>
        </div>
    );
};

export default UpdateBlog;