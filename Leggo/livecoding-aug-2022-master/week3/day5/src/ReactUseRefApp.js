import './App.css';
import {useRef, useState} from "react";

// Use-case for useRef:
// - You want to keep a value between renders
// - You want to keep a reference to a DOM element
// - You want to keep a reference to a component
// - You want to see the inner workings of an HTML element/hook
// - Optimizing a form with a lot of inputs
// - canvas is a good example of a DOM element that you want to keep a reference to
    // What is a canvas? It is a HTML element that allows you to draw on it

function ReactUseRefApp() {

    const [triggerRender, setTriggerRender] = useState(false); // this is to trigger a re-render
    const ref = useRef(); // this is a reference that does not trigger a re-render
    console.log("-> ref", ref);

    const handleClick = () => {
        // ref.current = 10 // this will not trigger a re-render
        setTriggerRender(!triggerRender) // this will trigger a re-render
    }

    return (
        <div className="App">
            <button ref={ref} onClick={handleClick}>
                Increment
            </button>
            <p>0</p>
        </div>
    );
}

export default ReactUseRefApp;
