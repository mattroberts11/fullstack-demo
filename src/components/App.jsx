import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import Modal from './Modal.jsx';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      // bugs: exampleData,
      bugs: [],
      show: false
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.getBugs = this.getBugs.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.getBugs();
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  getBugs(){
    fetch('http://localhost:3000/api/bugs')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.setState({bugs: data}))
      .catch(err => console.log('Error on getBugs= ', err))
  }

  render() {
    return (
      <main>
      <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>Model</p>
        <p>Data</p>
      </Modal>
      <button type="button" onClick={this.showModal}>
        Open
      </button>

      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {
          this.state.filter === 'None'
          ?
            this.state.bugs.map((bug) => (
                <BugTile
                  bugName={bug.bugName}
                  bugDescription={bug.bugDescription}
                  reportedBy={bug.reportedBy}
                  createdDate={bug.createdDate}
                  assignedTo={bug.assignedTo}
                  threatLevel={bug.threatLevel}
                  key={bug.bugName}
                />
                ))
          :
              this.state.bugs
                .filter(threat => threat.threatLevel === this.state.filter)
                .map((bug) => (
                <BugTile
                  bugName={bug.bugName}
                  bugDescription={bug.bugDescription}
                  reportedBy={bug.reportedBy}
                  createdDate={bug.createdDate}
                  assignedTo={bug.assignedTo}
                  threatLevel={bug.threatLevel}
                  key={bug.bugName}
                />
                ))
        }
      </table>
      </main>
    );
  }
}

export default App;