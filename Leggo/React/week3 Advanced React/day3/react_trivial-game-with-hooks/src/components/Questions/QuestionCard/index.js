import './index.css';
import Choices from '../Choices';
import { useParams } from 'react-router-dom';

const QuestionCard = ({ question }) => {
  const params = useParams();

  return (
    <>
      {question && (
        <div className='question-card' data-order={params.order}>
          {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
          <div
            className='question-text'
            dangerouslySetInnerHTML={{ __html: question.question }}
          ></div>
          <Choices question={question} />
        </div>
      )}
    </>
  );
};

export default QuestionCard;
