import './index.css';
import { useDispatch } from 'react-redux';
import { add_choice } from '../../../../store/slices/choices';
import { Link, useParams } from 'react-router-dom';

const Choice = ({ choice }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const handleSelectChoice = (e) => {
    dispatch(add_choice(choice));
  };

  const generateContent = () => {
    // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    const nextOrder = Number(params.order) + 1;
    return (
      <Link
        to={`/questions/${nextOrder}`}
        dangerouslySetInnerHTML={{ __html: choice }}
      ></Link>
    );
  };

  return (
    <li className='choice' onClick={handleSelectChoice}>
      {generateContent()}
    </li>
  );
};

export default Choice;
