import './App.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTokenAction} from "./redux/authSlice";

function App() {
    const authState = useSelector(state => state.auth)
    console.log("-> authState", authState);


    useEffect(() => {
        const tokenFromLs = localStorage.getItem("auth")
        console.log("-> tokenFromLs", tokenFromLs);
        if (tokenFromLs) {
            const tokenJsObject = JSON.parse(tokenFromLs) // {token: "token string"}
            dispatch(setTokenAction(tokenJsObject.token))
        }
    }, []); // empty array === componentDidMount


    const dispatch = useDispatch()
    // console.log("-> authState", authState);


    const [email, setEmail] = useState("lelib14674@esmoud.com")
    const [password, setPassword] = useState("password")

    // const [token, setToken] = useState(undefined)
    const [posts, setPosts] = useState([])
    // console.log("-> posts", posts);
    // console.log("-> token", token);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("-> email", email);
        // console.log("-> password", password);
        const url = "https://motion.propulsion-home.ch/backend/api/auth/token/"
        const jsObject = {
            email: email,
            password: password
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObject)
        }
        fetch(url, config).then(response => {
            return response.json()
        }).then(data => {
                // setToken(data.access)
                const tokenFromServer = data.access

                // Set token in redux
                dispatch(setTokenAction(tokenFromServer))

                const jsObject = {
                    token: tokenFromServer
                }
                // set token in localstorage
                localStorage.setItem("auth", JSON.stringify(jsObject)) // must convert js data to JSON data
            }
        )
    }

    const handleGetPosts = () => {
        if (authState.token === undefined) {
            alert("Login first")
            return
        }
        // get token
        const invalidToken = "totally-the-token"
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/"
        const method = "GET"
        const headers = new Headers({
            "Authorization": `Bearer ${authState.token}`
        })

        const config = {
            method: method,
            headers: headers
        }

        fetch(url, config).then(response => response.json()).then(data => setPosts(data.results))

    }

    const handleLogout = () => {
        localStorage.removeItem("auth")
        dispatch(setTokenAction(undefined))
    }

    return (
        <div className="App">
            <h1>
                {authState.token ? "You are logged in" : "Login"}
            </h1>
            <form onSubmit={handleSubmit}>
                <input autoComplete={"false"} value={email} type="text" onChange={handleEmailChange} name={"email"}/>
                <input autoComplete={"false"} value={password} type="password" onChange={handlePasswordChange}
                       name={"password"}/>
                <button type={"submit"}>
                    login
                </button>
            </form>
            <button onClick={handleGetPosts}>
                getPosts
            </button>
            {posts.map(post => (
                <div>
                    {post.content}
                </div>
            ))}
            <button onClick={handleLogout}>
                logout
            </button>
        </div>
    );
}

export default App;
