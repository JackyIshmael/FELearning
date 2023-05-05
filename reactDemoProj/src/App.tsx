import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
    const [state, setState] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log(state);
        }, 5000);

        return () => {
            // clears timeout before running the new effect
            clearTimeout(timeout);
        };
    }, [state]);
    return (
        <div className="App">
            <h1>State: {state.toString()}</h1>
            <button onClick={() => setState(false)}>update</button>
        </div>
    );
}

export default App;