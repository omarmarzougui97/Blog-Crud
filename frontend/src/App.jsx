import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import BlogList from './components/BlogList'
import UpdateBlog from "./components/UpdateBlog";
import CreateBlog from "./components/CreateBlog";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BlogList/>}/>
                <Route path="/create" element={<CreateBlog/>}/>
                <Route path="/edit/:id" element={<UpdateBlog/>}/>
            </Routes>

        </Router>

    );
}

export default App;
