import './App.css';
import Quote from "./Quote";
import {useEffect, useReducer} from "react";
import Spinner from "./Spinner";

const initialState = {
    quote: undefined,
    loading: false,
    errorMessage: undefined
}

const reducer = (state, action) => { // A mini redux reducer
    console.log("-> In the reducer");
    console.log("-> state", state);
    console.log("-> action", action);

    if (action.type === "SET_IS_LOADING") { // set loading to true
        // const newState = {...state} // make a copy of the state
        // newState.loading = true; // set loading to true
        // return newState; // return the new state
        return { // better way to do it for this case
            quote: undefined,
            loading: true,
            errorMessage: undefined
        }
    }
    if (action.type === "SET_QUOTE") { // set quote
        // const newState = {...state} // make a copy of the state
        // newState.quote = action.payload; // set quote
        // newState.loading = false; // set loading to false
        // newState.errorMessage = undefined; // set error message to undefined because we have a quote
        // return newState; // return the new state

        return {
            quote: action.payload,
            loading: false,
            errorMessage: undefined
        }
    }
    if (action.type === "SET_ERROR") { // set error message
        // const newState = {...state} // make a copy of the state
        // newState.errorMessage = action.payload; // set error message
        // newState.quote = undefined; // set quote to undefined because we have an error
        // newState.loading = false; // set loading to false
        // return newState; // return the new state

        return {
            quote: undefined,
            loading: false,
            errorMessage: action.payload
        }
    }
    return initialState
}

function ReactUseReducerApp() {
    // const [quote, setQuote] = useState(undefined);
    // const [loading, setLoading] = useState(true);
    // const [errorMessage, setErrorMessage] = useState(undefined);
    // SHow fat local state example here
    // const [state, setState] = useState(initialState); // annoying to handle

    // THen show how to use a reducer to handle state
    // The dispatch is similar to that of redux, made by the same guy
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("-> state", state);


    useEffect(() => {
        // setLoading(true); // set loading to true
        dispatch({type: "SET_IS_LOADING"});
        const url = "https://api.quotable.io/random1";
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error("Something went wrong on api server!");
            })
            .then(quote => {
                dispatch({
                    type: "SET_QUOTE",
                    payload: quote.content
                })
                // setLoading(false); // set loading to false
                // setQuote(quote.content);  // set quote
            }).catch(error => {
            dispatch({
                type: "SET_ERROR",
                payload: error.message
            })
            // setLoading(false); // set loading to false
            // setErrorMessage(error.message); // set error message
        })
    }, []); // <-- empty array means "run this effect only once"

    return (
        <div className="App">
            <button>
                Increment
            </button>
            <p>0</p>
            {/*{loading ? <Spinner/> : (errorMessage !== undefined ? (*/}
            {/*    <p>{errorMessage}</p>*/}
            {/*) : <Quote quote={quote}/>)}*/}
            {state.loading ? <Spinner/> : (state.errorMessage !== undefined ? (
                <p>{state.errorMessage}</p>
            ) : <Quote quote={state.quote}/>)}
        </div>
    );
}

export default ReactUseReducerApp;
