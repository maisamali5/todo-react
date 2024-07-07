import React, { useState } from "react";
import "./App.css";


const SearchBar = () => {
  const [ListTask, setListTask] = useState(""); 
  const [addBox, setaddBox] = useState("");
  const [Await , setAwait] = useState(false);

  const handleChange = (e) => {
    setaddBox(e.target.value);
  };

  const addTodo = (addBox) => {
    if (addBox) {
      setListTask([...ListTask, { input: addBox, id: ListTask.length + 1 }]);
      setaddBox("");
      setAwait(true); 
    }
  };

  const deleteTask = (id) => {
    const newList = ListTask.filter(blog => blog.id !== id);
    setListTask(newList);
}


  return (
    <div className="searchBox">
      <input
        type="text"
        id="search"
        placeholder="Enter Todo Task Here"
        value={addBox}
        onChange={handleChange}
      />
      <button className="btn" onClick={() => addTodo(addBox)}>Add task </button>
      
      {Await && <div className="container"> 
            <h1> All Todo task list </h1>
                {ListTask.map((list) => (    
                <div className="blog-preview" key={list.id}>
                    <h3>{list.input}</h3>
                    <input className="btn" type="button" value="Delete" onClick={()=>deleteTask(list.id)} style={
                    {backgroundColor: 'red',color: 'white',
                      border: 'none',padding: '10px',
                      borderRadius: '5px',cursor: 'pointer',
                    margin: '10px'}  
                    } />
                </div>
            ))}
        </div>}

    </div>
  );
};
export default SearchBar;
