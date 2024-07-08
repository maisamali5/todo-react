import React, { useState } from "react";
import "./App.css";


const SearchBar = () => {
  const [ListTask, setListTask] = useState(""); 
  const [DummyList, setDummyList] = useState('');
 const [addBox, setaddBox] = useState("");
  const [Await , setAwait] = useState(false);
  const [Search, setSearch] = useState(false);
  const [NonSearch, setNonSearch]= useState(true);

  const handleChange = (e) => {
    setaddBox(e.target.value);

    if(ListTask.length > 0 && addBox !== "") {
      setDummyList(ListTask.filter(list => list.input.includes(addBox)));
      setAwait(true);
      setNonSearch(false);
      setSearch(true);
    }
  };

  const addTodo = (addBox) => {
    if (addBox && ListTask.length === 0) {
      setSearch(false);
      setNonSearch(true);
      setAwait(true);
      setListTask([...ListTask, { input: addBox, id: ListTask.length + 1 }]);
      setaddBox("");
      setDummyList(ListTask);
    }else if(ListTask.filter(list => list.input.includes(addBox))){
      alert("Task already exist");
    }
  };

  const deleteTask = (id) => {
    const newList = ListTask.filter(list => list.id !== id);
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
      
      {Await && NonSearch && <div className="container">
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

        {Await && Search && <div className="container">
            <h1> All Todo task list </h1>
                {DummyList.map((list) => (    
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
