import { useParams } from "react-router-dom";

const Contact = () => {

    const username = useParams().username
    const title = useParams().title
    const color = useParams().color


    return (
        <>
            <p > Contact </p>
            <h1 style={{color: `${color}`}}> { title }. {username} </h1>
        </>
    )
}
export default Contact;