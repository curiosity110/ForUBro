import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../store/actions';

import Layout from '../Layout';
import Routes from '../../routes';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions(10));
    }

    render() {
        return (
            <Layout>
                <Routes />
            </Layout>
        );
    }
}

export default connect()(App);

/*

/////////////////////////////////////////////
// FUNCTIONAL COMPONENT & HOOKS EQUIVALENT //
/////////////////////////////////////////////

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../store/actions';

import Layout from '../Layout';
import Routes from '../../routes';

const App = ({ dispatch }) => {
    // useEffect without the dependency array is like componentDidMount() and componentDidUpdate() combined
    // since we aren't using mapStateToProps or passing any other props to app, it will only be called once
    useEffect(() => {
        dispatch(fetchQuestions(10));
    });

    return (
        <Layout>
            <Routes />
        </Layout>
    );
};

export default connect()(App);

*/
