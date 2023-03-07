import React from 'react';
import useFetch from "./custom-hooks/useFetch";

const ReactAppWithCustomHook = () => {
    const {response, error, isLoading} = useFetch('https://jsonplaceholder.typicode.com/posts/', {});

    if (isLoading) { // if loading, show loading message
        return <p>Loading...</p>
    }

    if (error) { // render error if there is one
        return <p>{error}</p>
    }

    if (response === null || response.length === 0) { // render no data if there is no data
        return <p>No data</p>
    }

    return (
        <div>
            {response.map(post => <p key={post.id}>{post.title}</p>)}
        </div>
    );
};
export default ReactAppWithCustomHook;