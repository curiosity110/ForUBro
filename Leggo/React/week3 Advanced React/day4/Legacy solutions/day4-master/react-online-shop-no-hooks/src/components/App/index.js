import React, { useEffect } from 'react';
import Layout from '../Layout';
import Shop from '../Shop';
import RenderCart from '../RenderCart';
import { addItems } from '../../store/actions/itemsActions';
import AuthComponent from '../../HOC';
import LoginInfo from '../LoginInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ dispatch }) => {
    useEffect(() => {
        // populate the redux store with random items
        dispatch(addItems(32));
    }, [dispatch]);

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Shop } />
                    <Route exact path="/shopping-cart" component={ AuthComponent(RenderCart) } />
                    <Route exact path="/login-info" component={ LoginInfo } />
                </Switch>
            </Layout>
        </Router>
    );
};

export default connect()(App);
