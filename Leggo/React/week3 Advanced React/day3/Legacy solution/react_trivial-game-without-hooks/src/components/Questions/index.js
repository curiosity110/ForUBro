import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class Questions extends Component {
    componentDidMount() {
        const { question, history } = this.props;
        if (!question) {
            history.push('/');
        }
    }

    componentDidUpdate() {
        const { question, isEnd, history } = this.props;
        if (!question) {
            const path = isEnd ? '/result' : '/';
            history.push(path);
        }
    }

    render() {
        const { question } = this.props;
        return <> {question && <QuestionCard question={question} />} </>;
    }
}

const mapStateToProps = (state, props) => {
    const getCurrentQuestion = () => {
        const index = props.match.params.order - 1;
        return state.questions.length ? state.questions[index] : null;
    };

    const isEndReached = () => {
        const order = props.match.params.order;
        const numQuestions = state.questions.length;
        return numQuestions === 0 ? false : order >= numQuestions;
    };

    return {
        question: getCurrentQuestion(),
        isEnd: isEndReached()
    };
};

export default connect(mapStateToProps)(Questions);

/*

/////////////////////////////////////////////
// FUNCTIONAL COMPONENT & HOOKS EQUIVALENT //
/////////////////////////////////////////////

import React, { useEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

const Questions = ({ question, history, isEnd }) => {
    // useEffect without the dependency array is like componentDidMount() and componentDidUpdate() combined
    // that is why we can do our checks in one go when using this hook
    useEffect(() => {
        if (!question) {
            const path = isEnd ? '/result' : '/';
            history.push(path);
        }
    });

    return <> {question && <QuestionCard question={question} />} </>;
};

const mapStateToProps = (state, props) => {
    const getCurrentQuestion = () => {
        const index = props.match.params.order - 1;
        return state.questions.length ? state.questions[index] : null;
    };

    const isEndReached = () => {
        const order = props.match.params.order;
        const numQuestions = state.questions.length;
        return numQuestions === 0 ? false : order >= numQuestions;
    };

    return {
        question: getCurrentQuestion(),
        isEnd: isEndReached()
    };
};

export default connect(mapStateToProps)(Questions);

*/
