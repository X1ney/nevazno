import React, {useState} from 'react';

const Counter = () => {

    const [currentN, setCurrentN] = useState('1')
    const [state, setState] = useState(0)

    const OnClick  = (value:number) =>{
    setState(state+value)
    }
    const OnClick1  = (value:number) =>{
        setState(state**value)
    }

    return (
        <div>
            <div>
                <input type="text"
                value={currentN}
                       onChange={(e)=>setCurrentN(e.target.value)}
                />
            </div>
            <div>
                {state}
            </div>

            <div>
                <button
                    onClick ={()=>OnClick(1)}
                >
                    Plus 1
                </button>

                <button
                    onClick ={()=>OnClick(-1)}
                >
                    Minus 1
                </button>
                <div>

                    <button
                        onClick ={()=>OnClick(100)}
                    >
                        Plus 100
                    </button>
                    <button
                        onClick ={()=>OnClick(parseInt(currentN))}
                    >
                        PlusN
                    </button>
                </div>
                <div>
                    <button onClick ={()=>OnClick1(999999)}>
                  uwu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;