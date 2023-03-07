import { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import ResultCard from './ResultCard';
import { fetchQuestions, resetChoices } from '../../store/actions';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, choices } = useSelector((state) => state);
  const numCorrectChoices = questions.filter(
    (question, i) => question.correct_answer === choices[i]
  ).length;

  const handleReset = () => {
    dispatch(fetchQuestions(4)).then(() => {
      dispatch(resetChoices());
      navigate('/');
    });
  };

  useEffect(() => {
    if (questions.length !== choices.length) {
      handleReset();
    }
  });

  return (
    <div className='results'>
      <h2>Results</h2>
      <div className='results-overview'>{`${numCorrectChoices} / ${questions.length}`}</div>
      {/* About &#x21bb; https://developer.mozilla.org/en-US/docs/Glossary/Entity*/}
      <button onClick={handleReset} className='btn-reset'>
        &#x21bb; start new game
      </button>

      {questions.length &&
        questions.map((question, i) => {
          return (
            <ResultCard
              key={question.question}
              question={question}
              choice={choices[i]}
              order={i + 1}
            />
          );
        })}
    </div>
  );
};

export default Result;
