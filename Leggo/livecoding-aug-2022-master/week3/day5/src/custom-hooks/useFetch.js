import {useEffect, useReducer} from "react";

const initialState = {
    data: undefined,
    loading: false,
    errorMessage: ""
}

const reducer = (state, action) => {
    // console.log("-> state in reducer", state);
    // console.log("-> action in reducer", action);
    if (action.type === "SET_LOADING") {
        const newState = {...state}
        newState.loading = action.payload
        return newState
    }
    if (action.type === "SET_DATA") {
        const newState = {...state}
        newState.loading = false
        newState.data = action.payload
        return newState
    }
    if (action.type === "SET_ERROR_MESSAGE") {
        const newState = {...state}
        newState.loading = false
        newState.data = undefined
        newState.errorMessage = action.payload
        return newState
    }

    return initialState
}

const useFetch = (url, config) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log("-> state", state);

    useEffect(() => {
        // const url = "https://api.quotable.io/random"
        dispatch({
            type: "SET_LOADING",
            payload: true
        })
        fetch(url, config).then(res => res.json()).then(data => {
            // store quot in store
            dispatch({
                type: "SET_DATA",
                payload: data
            })
            dispatch({
                type: "SET_LOADING",
                payload: false
            })
        }).catch(err => {
            dispatch({
                type: "SET_ERROR_MESSAGE",
                payload: err.message
            })
            dispatch({
                type: "SET_LOADING",
                payload: false
            })
        })
    }, [url, config]) // re-run the effect if url or config changes

    return state
}

export default useFetch