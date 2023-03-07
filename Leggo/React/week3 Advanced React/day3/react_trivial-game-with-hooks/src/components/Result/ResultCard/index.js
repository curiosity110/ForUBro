import './index.css';

const ResultCard = ({ order, question, choice }) => {
  const getConditionalClassName = () =>
    question.correct_answer === choice ? ' correct' : ' wrong';

  return (
    <>
      {question && (
        <div className='result-card' data-order={String(order)}>
          {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
          <div
            className='result-card-question'
            dangerouslySetInnerHTML={{ __html: question.question }}
          ></div>

          <div className={'result-card-result' + getConditionalClassName()}>
            <div
              className='result-card-choice'
              dangerouslySetInnerHTML={{ __html: choice }}
            ></div>
            {question.correct_answer !== choice && (
              <div
                className='result-card-correct-answer'
                dangerouslySetInnerHTML={{ __html: question.correct_answer }}
              ></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ResultCard;
