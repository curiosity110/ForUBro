import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Blue from "../component/Blue";
import Red from "../component/Red";

const About = () => {

    // const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/contact/155')
    //     }, 2000)
    // })

    return (
        <div>
            <h1>About</h1>
            <Outlet/>

        </div>
    )
}

export default About;