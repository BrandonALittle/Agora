import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar.jsx';
import ProjectList from './components/projectList.jsx';
import Navbar from './components/navbar.jsx';
import AddProject from './components/addProject.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
      {
      }
      ]
    }
  }
  displayInfo() {
    if (currentInfo === a) {

    }
    return <ProjectList/>
    return <CustomerInfo/>
  }


  componentDidMount() {
    fetch('/projects')
    .then((projects) => projects.json())
    .then((projects) => this.setState({projects}));
  }

  render () {
    return (
      <div className="container-fluid">
        <div>
          <Navbar />
        </div>
        <div className="row">
          <Sidebar />
          <div>
<<<<<<< HEAD
            <AddProject/>
=======
<<<<<<< HEAD
            <AddProject/>
=======
>>>>>>> bcc4af3917b851fcddd8a2a8f4e3f1d2d3a8517b
>>>>>>> d2399e353e4b46296f4bca34101a15521a00e117
            <ProjectList projects={this.state.projects}/>
          </div>
        </div>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));