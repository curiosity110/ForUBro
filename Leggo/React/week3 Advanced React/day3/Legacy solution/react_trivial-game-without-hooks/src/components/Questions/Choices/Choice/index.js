import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { addChoice } from '../../../../store/actions';
import { Link, withRouter } from 'react-router-dom';

const Choice = ({ choice, dispatch, match }) => {
    const handleSelectChoice = e => {
        dispatch(addChoice(choice));
    };

    const generateContent = () => {
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        const nextOrder = Number(match.params.order) + 1;
        return <Link to={`/questions/${nextOrder}`} dangerouslySetInnerHTML={{ __html: choice }}></Link>;
    };

    return (
        <li className='choice' onClick={handleSelectChoice}>
            {generateContent()}
        </li>
    );
};

export default withRouter(connect()(Choice));
