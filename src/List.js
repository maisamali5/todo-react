import { useState } from 'react';
import './App.css';
import ListCall from './ListCall';
import SearchBar from './SearchBar';

const List = () => {
    const [Blogs, setBlogs] = useState(
        [
            {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3} 
    ]
);
    
    const deleteBlog = (id) => {
        const newBlogs = Blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const searchVal = (search) => {
        console.log("search",search == "")
        if(search == "") {
            setBlogs(Blogs);
        }
        else{
            const newBlogs = Blogs.filter(blog => blog.author === search);
            setBlogs(newBlogs);
        }

    }
   
    
    return ( 
        <div className="blogslist"> 
            {/* <SearchBar searchVal={searchVal}/> */}
            {/* <ListCall Blogs={Blogs} title="All todo list" deleteBlog={deleteBlog} /> */}
        </div>
    );
}

export default List;
