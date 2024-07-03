import React, { useState } from "react";
import "./App.css";
// import ListCall from "./ListCall";

const SearchBar = () => {
  const [ListTask, setListTask] = useState([]); 
  let [addBox, setaddBox] = useState("");


  const handleChange = (e) => {
    setaddBox(e.target.value);
  };

  const addTodo = (addBox) => {
    if (addBox) {
      setListTask([...ListTask, { input: addBox, id: ListTask.length + 1 }]);
      setaddBox("");
      console.log(ListTask);
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
      
      <div className="container"> 
            <h1> All Todo task list </h1> 
                {ListTask.map((list) => (    
                <div className="blog-preview" key={list.id}>
                    <h2>{list.input}</h2>
                    <input type="button" value="Delete" onClick={()=>deleteTask(list.id)} />
                </div>
            ))}
        </div>

    </div>
  );
};
export default SearchBar;
