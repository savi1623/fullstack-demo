import React from 'react';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportedBy: '',
      bugDescription: '',
      threatLevel: '',
      assignedTo: '',
      newBug: {},
    };
  }

  addtoNewBug() {
    this.setState({
      newBug: {
        ...this.state.reportedBy,
        ...this.state.bugDescription,
        ...this.state.threatLevel,
        ...this.state.assignedTo,
      },
    });
  }

  render() {
    return (
      <form>
        New Bug
        <br />
        Name
        <input type="Text" placeholder = 'Your Name' onChange = {(x) => {
          this.setState({
            reportedBy: x.target.value,
          });
        }} />
        <br />
        Description
        <input type="Text" placeholder = 'Bug Description' onChange = {(y) => {
          this.setState({
            bugDescription: y.target.value,
          });
        }} />
        <br />
        Threat Level
        <select type="Select" onChange = {(w) => {
          this.setState({
            threatLevel: w.target.value,
          });
        }} >
          <option value = "None"></option>
          <option value = "Low-Priority">Low-Priority</option>
          <option value = "Important">Important</option>
          <option value = "Critical">Critical</option>
        </select>
        <br />
        Assigned Member
        <input type="Text" placeholder = 'Assiged Member' onChange = {(z) => {
          this.setState({
            assignedTo: z.target.value,
          });
        }}/>
        <button onClick ={(e) => this.props.addBug(e, this.state.newBug)} />
      </form>
    );
  }
}

export default Submit;
