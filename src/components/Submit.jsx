import React from 'react';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportedBy: '',
      bugDescription: '',
      threatLevel: '',
      assignedTo: '',
      bugName: '',
      createdDate: '',
      newBug: {},
    };
  }

  addtoNewBug() {
    this.setState({
      newBug: {
        ...this.state.bugName,
        ...this.state.bugDescription,
        ...this.state.reportedBy,
        ...this.state.createdDate,
        ...this.state.assignedTo,
        ...this.state.threatLevel,
      },
    });
  }

  render() {
    return (
      <form>
        New Bug
        <br />
        Name
        <input type="Text" placeholder='Your Name' onChange={(x) => {
          this.setState({
            reportedBy: x.target.value,
            // add 1 to most recent number
            // bugName: this.props.bug
            // find way to get current date
            // createdDate:
          });
        }} />
        <br />
        Description
        <input type="Text" placeholder='Bug Description' onChange={(y) => {
          this.setState({
            bugDescription: y.target.value,
          });
        }} />
        <br />
        Threat Level
        <select type="Select" onChange={(w) => {
          this.setState({
            threatLevel: w.target.value,
          });
        }} >
          <option value="None"></option>
          <option value="Low-Priority">Low-Priority</option>
          <option value="Important">Important</option>
          <option value="Critical">Critical</option>
        </select>
        <br />
        Assigned Member
        <input type="Text" placeholder='Assiged Member' onChange={(z) => {
          this.setState({
            assignedTo: z.target.value,
          });
        }} />
        {/* comeback to this */}
        <button onClick ={() => this.addtoNewBug()}>Add</button>
        <button onClick={(e) => this.props.addBug(e, this.state.newBug)}>Refresh</button>
      </form>
    );
  }
}

export default Submit;
