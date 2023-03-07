import React, {memo, useCallback, useState} from 'react'

const ChildComponent = memo(() => { // this is a higher order component that will prevent a component from re-rendering if the props have not changed
    console.count('Child component rendered');
    return <h1>Child Component</h1>
});
// const ChildComponent = () => {
//     console.log('Child component rendered');
//     return <h1>Child Component</h1>
// };

export const ReactUseCallbackApp = () => { // Parent component

    const [counter, setCounter] = useState(0);

    const inc = useCallback( () => { // useCallback will prevent the function from re-creating if the dependencies have not changed
        setCounter(counter + 1)
    },[counter]); // if the counter changes, the function will re-create


    // const inc = () => { // this will re-create the function every time the component re-renders
    //     setCounter(counter + 1)
    // };

    return <>
        <ChildComponent inc={inc}/>
        {/*<ChildComponent/>*/}
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Count</button>
    </>
};
export default ReactUseCallbackApp;