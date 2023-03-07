import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Here we are importing all the components that will be directly passed to <Route component={<ComponentName>} />
// You could even go so far as to move these components from /src/components to /src/routes in large scale applications
import Home from '../components/Home';
import Questions from '../components/Questions';
import Result from '../components/Result';
import NotFound from '../components/NotFound';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/questions/:order' component={Questions} />
                <Route path='/result' exact component={Result} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routes;
