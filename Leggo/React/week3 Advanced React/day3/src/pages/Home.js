import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchQuotes } from '../redux/slices/quotes'


function Home() {
    const dispatch = useDispatch()
    const quotes = useSelector((state) => state.quotes.list)
    const name = useSelector((state) => state.quotes.name)

    // the middleware call could be used in an useEffect or as an onlick in our Elements (h1, line 21)
    useEffect(() => {
        // dispatch(fetchQuotes())
    }, [])

    return (
        <div className="Home">
            <h1>Quotes</h1>
            <h1 onClick={() => dispatch(fetchQuotes())}>{name}</h1>
            <ul> 
                {quotes.map((quote) => <li key={quote}>{quote}</li>)}
            </ul>
            <Link to={'/about'}>About</Link>
        </div>
    );
}

export default Home;
