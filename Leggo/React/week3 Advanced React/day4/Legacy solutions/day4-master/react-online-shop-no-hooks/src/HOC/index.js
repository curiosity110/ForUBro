import React, { Component } from 'react'
import { connect } from 'react-redux'

export default WrapperComponent => {
  class AuthComponent extends Component {
    redirect = () => {
      if (!this.props.authenticated) {
        this.props.history.push({
          pathname: '/login-info', 
          isLogInVisible: true 
        })
      }
    };

    componentDidMount() {
      this.redirect()
    }

    componentDidUpdate() {
      this.redirect()
    }

    componentWillUpdate() {
      this.redirect()
    }

    render() {
      return <WrapperComponent { ...this.props }/>
    }
  }

  const mapStateToProp = ({ userLoginReducer: { authenticated } }) => ({
    authenticated
  });
  return connect(mapStateToProp)(AuthComponent)
}