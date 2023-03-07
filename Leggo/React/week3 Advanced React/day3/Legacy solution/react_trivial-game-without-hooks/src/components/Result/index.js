import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import ResultCard from './ResultCard';
import { fetchQuestions, resetChoices } from '../../store/actions';

class Result extends Component {
    handleReset = () => {
        const { dispatch, history } = this.props;
        dispatch(fetchQuestions(10)).then(() => {
            dispatch(resetChoices());
            history.push('/');
        });
    };

    componentDidMount() {
        const { questions, choices } = this.props;
        if (questions.length !== choices.length) {
            this.handleReset();
        }
    }

    render() {
        const { numCorrectChoices, questions, choices } = this.props;

        return (
            <div className='results'>
                <h2>Results</h2>
                <div className='results-overview'>{`${numCorrectChoices} / ${questions.length}`}</div>
                <button onClick={this.handleReset} className='btn-reset'>
                    &#x21bb; Reset
                </button>

                {questions.length &&
                    questions.map((question, i) => {
                        return (
                            <ResultCard key={question.question} question={question} choice={choices[i]} order={i + 1} />
                        );
                    })}

                {/* About &#x21bb; https://developer.mozilla.org/en-US/docs/Glossary/Entity*/}
                <button onClick={this.handleReset} className='btn-reset'>
                    &#x21bb; Reset
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    questions: state.questions,
    choices: state.choices,
    numCorrectChoices: state.questions.filter((q, i) => q.correct_answer === state.choices[i]).length
});

export default connect(mapStateToProps)(Result);

/*

/////////////////////////////////////////////
// FUNCTIONAL COMPONENT & HOOKS EQUIVALENT //
/////////////////////////////////////////////

import React, { useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import ResultCard from './ResultCard';
import { fetchQuestions, resetChoices } from '../../store/actions';

const Result = ({ questions, choices, numCorrectChoices, dispatch, history }) => {
    const handleReset = () => {
        dispatch(fetchQuestions(10)).then(() => {
            dispatch(resetChoices());
            history.push('/');
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
            <button onClick={handleReset} className='btn-reset'>
                &#x21bb; Reset
            </button>

            {questions.length &&
                questions.map((question, i) => {
                    return <ResultCard key={question.question} question={question} choice={choices[i]} order={i + 1} />;
                })}

            <button onClick={handleReset} className='btn-reset'>
                &#x21bb; Reset
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    questions: state.questions,
    choices: state.choices,
    numCorrectChoices: state.questions.filter((q, i) => q.correct_answer === state.choices[i]).length
});

export default connect(mapStateToProps)(Result);

*/
