import React from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Name from "./components/Name";


function App() {
    return (
        <div className="App">
            <header className="App-header">

                <HelloWorld></HelloWorld>
                <Name></Name>
                <p>
                    MMMMonkey
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
