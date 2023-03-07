import React, {useEffect, useState} from 'react';

// Why useMemo?
// - It is a hook that will prevent a function from re-running if the dependencies have not changed

export const ReactUseMemoApp = () => {
    const [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('userFetchCalled');
        // const fetchData = async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const users = await response.json();
        //     setUsers(users)
        // };
        // fetchData();
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))

    }, [setUsers]);

    const sortUsers = users => { // this function will re-run every time the component re-renders
        console.count('sortUser Called');
        return users.sort((a, b) => a.name.length - b.name.length);
    };
    // const sortedUsers = useMemo(() => sortUsers(users), [users]);


    return <>
        { counter }
        <button onClick={ () => setCounter(counter + 1) }>Counter</button> {/* this will trigger a re-render */}
        { sortUsers(users).map(user => { // this will re-run every time the component re-renders
            return <h1 key={user.id}>{ user.name }</h1>
        }) }
        {/*{ sortedUsers.map(user => {*/}  {/*// this will not re-run the sortUsers function if the users have not changed*/}
        {/*    return <h1 key={user.id}>{ user.name }</h1>*/}
        {/*}) }*/}
    </>
};

export default ReactUseMemoApp;