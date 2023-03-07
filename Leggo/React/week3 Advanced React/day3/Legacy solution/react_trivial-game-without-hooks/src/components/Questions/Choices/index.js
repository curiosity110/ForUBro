import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { shuffle } from '../../../helpers';
import Choice from './Choice';

const Choices = ({ question }) => {
    const getChoicesInRandomOrder = () => {
        const choices = [question.correct_answer, ...question.incorrect_answers];
        return shuffle(choices);
    };

    return (
        <>
            {question && (
                <ul className='choices-list'>
                    {getChoicesInRandomOrder().map(choice => (
                        <Choice choice={choice} key={choice} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default connect()(Choices);
