import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateQuote } from '../../store/actions';

import './index.css';

class Header extends Component {

  fetchData = () => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => res.json())
      .then(quotes => {
        const randomQuote = updateQuote(quotes[0])
        // sends the action
        this.props.dispatch(randomQuote)
      });
  }
  componentDidMount() {
    this.fetchData();
  }

  handleQuoteChange = () => {
    this.fetchData();
  }

  render() {
    return (
      <div className="Header">
        <h2>{this.props.quote}</h2>
        <button className="Header-button" onClick={this.handleQuoteChange}>
          Give me more
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.changeQuote
  }
}
export default connect(mapStateToProps)(Header);
