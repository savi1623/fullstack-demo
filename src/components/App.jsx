import React from 'react';
import Submit from './Submit.jsx';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    const bugArr = [];
    this.state.bugs.map((bug) => {
      if (bug.threatLevel === filter) {
        bugArr.push(bug);
      }
      return bugArr;
    });
    this.setState({
      filter,
      bugs: bugArr,
    });
  }

  addBug(e, newBug) {
    e.preventDefault();
    this.setState({
      bugs: [...this.state.bugs, newBug],
    });
  }

  render() {
    return (
      <div>
        <Submit addBug = {this.addBug.bind(this)}/>
        <table>
          <Nav
            filterHandler={this.filterHandler}
          />
          {this.state.bugs.map((bug) => (
            <BugTile
              bugName={bug.bugName}
              bugDescription={bug.bugDescription}
              reportedBy={bug.reportedBy}
              createdDate={bug.createdDate}
              assignedTo={bug.assignedTo}
              threatLevel={bug.threatLevel}
              key={bug.bugName}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
