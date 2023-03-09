import React, {useState} from 'react';
import {type} from "os";
import ToDoListElement from "./toDoListElement";

const ToDoList = () => {

    type ListElement = {
        name:string
        desc:string
    }

    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')

    const [List, setList] =useState<ListElement[]>([])

    const Clear = () =>{
        setName('');
        setDesc('');
    }
    const AddElementInList = () =>{
        setList([...List,{
            name:name,
            desc:desc
        }])
        Clear();
    }

    const onDeleteClick = (index:number) => {
        const  filtered = List
            .filter((el,i)=>i!==index);
        setList(filtered);
    }

    return (
        <div>
            <input type="text"
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
            />
            <input type="text"
                   value={desc}
                   onChange={(e)=>setDesc(e.target.value)}
            />
            <button onClick={()=>AddElementInList()}
            >
                взорвать реактор
            </button>
            <div>
                {
                    List.map((el,i)=> <div>
                        <ToDoListElement onDeleteClick={()=> onDeleteClick(i)} name = {el.name} desc = {el.desc}></ToDoListElement>

                </div>)
                }
            </div>
        </div>
    );
};

export default ToDoList;