import React from 'react';

type Props  = {
    name: string;
    desc: string;
    onDeleteClick:()=>void;

}



const ToDoListElement = ({name, desc, onDeleteClick}:Props) => {


    return (
        <div style={{display: 'flex', gap:'lem'}}>
        <div>
            {name}
        </div>
        <div>
            {desc}
        </div>
            <div>
                <button
                    onClick={()=>onDeleteClick()}
                >
                    удалить
                </button>
            </div>
        </div>
    );
};

export default ToDoListElement;