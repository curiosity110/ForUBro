import React, { Component } from 'react';

// All we do here is re-route the user to <Home>
// The <Switch> will select this component whenever the URL doesn't match any of the other route paths
class NotFound extends Component {
    componentDidMount() {
        this.props.history.push('/');
    }

    render() {
        // This JSX will only be visible for a couple ms until the redirect happens in componentDidMount()
        return <div> "This is not the page you are looking for" - Obi-Wan Kenobi </div>;
    }
}

export default NotFound;
