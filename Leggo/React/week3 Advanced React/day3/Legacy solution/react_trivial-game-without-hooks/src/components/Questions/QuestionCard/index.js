import React from 'react';
import './index.css';
import Choices from '../Choices';
import { withRouter } from 'react-router-dom';

const QuestionCard = ({ question, match }) => {
    return (
        <>
            {question && (
                <div className='question-card' data-order={match.params.order}>
                    {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
                    <div className='question-text' dangerouslySetInnerHTML={{ __html: question.question }}></div>
                    <Choices question={question} />
                </div>
            )}
        </>
    );
};

export default withRouter(QuestionCard);
