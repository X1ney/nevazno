import React from 'react';
import './App.css';
import ToDoList from "./components/toDoList/toDoList";
/*
import Counter from "./components/counter/counter";
*/


function App() {
    return (
        <div className="App">
            {/*<Counter></Counter>*/}
            <ToDoList></ToDoList>
        </div>
    );
}

export default App;
