import React from 'react';
import './App.css';
import {PageWithTimer} from './components/pageWithTimer';

class App extends React.Component {
  state = {
    pageCounter: 1,
  };

  nextPageHandler = () => {
    // conditional that restarts the pageCounter after reaching page/component 4
    if (this.state.pageCounter === 4) {
      return this.resetPageHandler();
    }
    this.setState({pageCounter: this.state.pageCounter + 1});
  };

  resetPageHandler = () => {
    this.setState({pageCounter: 1});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.resetPageHandler}>restart</button>
          {this.state.pageCounter === 1 && (
            <PageWithTimer pageNumber={this.state.pageCounter} />
          )}
          {this.state.pageCounter === 2 && (
            <PageWithTimer pageNumber={this.state.pageCounter} />
          )}
          {this.state.pageCounter === 3 && (
            <PageWithTimer pageNumber={this.state.pageCounter} />
          )}
          {this.state.pageCounter === 4 && (
            <PageWithTimer pageNumber={this.state.pageCounter} />
          )}
          <button onClick={this.nextPageHandler}>next page</button>
        </header>
      </div>
    );
  }
}

export default App;
