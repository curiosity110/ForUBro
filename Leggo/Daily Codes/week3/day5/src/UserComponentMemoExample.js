import React, {memo, useEffect, useState} from 'react';


const UserComponent = memo(({user}) => {
    console.count("-> UserComponent re-rendered");
    return <h1>{user.name}</h1>
})

export const UserComponentMemoExample = () => {
    const [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('userFetchCalled');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))

    }, [setUsers]);



    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
        {users.map(user => { // this will re-run every time the component re-renders
            return <UserComponent key={user.id} user={user} />
        })}
    </>
};

export default UserComponentMemoExample;