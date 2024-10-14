import {useState} from 'react';
import blogService from '../services/blogService';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
        setImage(e.target.files[0].name);

        let reader = new FileReader();



    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        /*        const blogData = {
                    title: title,
                    description: description,
                    image: image
                };*/


        //const blogData = new FormData();

        console.log('image', image);
        /*        blogData.append('title', title);
                blogData.append('description', description);
                blogData.append('image', image);*/

        try {
            await blogService.createBlog({image, title, description})
                .then(() => {
                    console.log('Blog created successfully');
                    setImage('');
                    setFile(null);
                    setTitle('');
                    setDescription('');
                });

            // Optionally, redirect or show a success message
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={description}
                              onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image"
                           onChange={handleImageChange}/>
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </div>
    );
};

export default CreateBlog;