import React from 'react';

// some console.logs are already set for you to better understand what is happening when. feel free to toggle the comment you need.

export class PageWithTimer extends React.Component {
  state = {
    timer: 1,
  };

  timerInterval;
  pageNumber = this.props.pageNumber;

  updateTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState({timer: this.state.timer + 1});
      // console.log(
      //   'Timer page ' + this.pageNumber + ' -> seconds:' + this.state.timer
      // );
    }, 1000);
  };

  // the component was created/mounted
  // functions that should be called after a component mounts like a first API call or the start of a timer
  componentDidMount() {
    // console.log('didMount: page ' + this.pageNumber);
    this.updateTimer();
  }

  // the component was updated
  componentDidUpdate = () => {
    // console.log('didUpdate: page ' + this.pageNumber);
  };

  // here we stop the interval short before it gets unmounted
  componentWillUnmount = () => {
    // console.log('will unmount: page ' + this.pageNumber);
    clearInterval(this.timerInterval);
  };

  render() {
    return (
      <div>
        <h1>This is page {this.pageNumber}</h1>
        <p>
          you're on page {this.pageNumber} since {this.state.timer} seconds
        </p>
      </div>
    );
  }
}
