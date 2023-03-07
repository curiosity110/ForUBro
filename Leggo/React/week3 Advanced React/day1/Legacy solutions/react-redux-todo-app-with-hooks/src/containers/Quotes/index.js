import { updateQuote } from '../../store/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

const Quotes = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.changeQuote);
  const fetchData = () => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((res) => res.json())
      .then((quotes) => {
        const randomQuote = updateQuote(quotes[0]);
        // sends the action to the redux store
        dispatch(randomQuote);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleQuoteChange = () => {
    fetchData();
  };

  return (
    <div className='Quotes'>
      <p>Ron Swanson's quotes</p>
      <h2>"{quote}"</h2>
      <button className='Quotes-button' onClick={handleQuoteChange}>
        another one
      </button>
    </div>
  );
};

export default Quotes;
