const ListCall = ({Blogs , title, deleteBlog}) => {
    return (

        <div className="container"> 
            <h2> {title} </h2> 
                {Blogs.map((blog) => (    
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <input type="button" value="Delete" onClick={()=> deleteBlog(blog.id)} />
                </div>
            ))}
        </div>
    );
}
export default ListCall;