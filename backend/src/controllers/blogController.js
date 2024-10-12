const Blog = require('../models/Blog');


//create a new blog
exports.createBlog = async (req, res) => {
    console.log(req.body);
    try {
        const {image, title, description} = req.body;
        console.log(req.body);
        const newBlog = new Blog({image, title, description});
        await newBlog.save();
        res.status(201).json({message: "Blog created successfully."});

        console.log(res.message);

    } catch (err) {
        res.status(500).json({error: 'Error creating blog'});
        console.log(res.message, err.message);
    }
}

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find(null, null, null);
        res.json(blogs);
    } catch (err) {
        res.status(500).json({
            error:
                'Error fetching blogs'
        });
    }
};

// Get a specific blog by ID
exports.getBlogById = async (req, res) => {
    try {

        const blog = await Blog.findById(req.params.id, null, null);
        if (!blog) {
            return res.status(404).json({error: 'Blog not found'});
        }
        res.json(blog);
        console.log(blog.toString())
    } catch (err) {
        res.status(500).json({
            error:
                'Error fetching blog'
        });
    }
};

//update a blog by id
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, null);
        if (!blog) {
            return res.status(404).json({error: 'Blog not found'});
        }
        res.json({
            message: 'Blog updated successfully'
        });
    } catch (err) {
        res.status(500).json({error: 'Error updating blog'});
    }
};

// delete a blog by ID
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id, null);
        if (!blog) {
            return res.status(404).json({error: 'Blog not found'});
        }
        res.json({
            message: 'Blog deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            error:
                'Error deleting blog'
        });
    }
};