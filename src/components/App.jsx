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

  componentDidMount() {
    fetch('http://localhost:3000/')
      .then((results) => {
        return results.json();
      });
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
    //ok not fetch due we are posting to this address
    fetch('http://localhost:3000/' , {
      method: 'POST',
      body: json.stringify(newBug);
    })
      .then((results) => {
        return results.json();
      })
      .then(bug => {
        let bugObj = {};
        // let bugName = bug.bugname;
        let bugDescription = bug.bugDescription;
        let reportedBy = bug.reportedBy;
        // let createdDate =
        let assignedTo = bug.assignedTo;
        let threatLevel = bug.threatLevel;
        bugObj.bugDescription = bugDescription;
        bugObj.reportedBy = reportedBy;
        bugObj.assignedTo = assignedTo;
        bugObj.threatLevel = threatLevel;
        return bugObj;
      })
      .then((bugObj) => {
        this.setState({
          bugs: [...this.state.bugs, bugObj],
        });
      });
  }

  render() {
    return (
      <div>
        <Submit bugs={this.state.bugs} addBug={this.addBug.bind(this)} />
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
