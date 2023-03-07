import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';
import QuestionCard from './QuestionCard';

function Questions() {
  const navigate = useNavigate();
  const params = useParams();
  const questions = useSelector((state) => state.questions);

  const getCurrentQuestion = () => {
    const index = params.order - 1;
    return questions.length ? questions[index] : null;
  };

  const isEndReached = () => {
    const order = params.order;
    const numQuestions = questions.length;
    return numQuestions === 0 ? false : order >= numQuestions;
  };

  useEffect(() => {
    if (!question) {
      navigate('/');
    }

    if (!question) {
      const path = isEndReached() ? '/result' : '/';
      navigate(path);
    }
  });

  const question = getCurrentQuestion();

  return <>{question && <QuestionCard question={question} />}</>;
}

export default Questions;
