
import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h1 className="text-3xl font-extrabold">Hello I have {blogs.length} blogs</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;