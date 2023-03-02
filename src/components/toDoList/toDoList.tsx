import React, {useState} from 'react';
import {type} from "os";

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
                    <div>
                        {el.name}
                    </div>
                    <div>
                        {el.desc}
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default ToDoList;