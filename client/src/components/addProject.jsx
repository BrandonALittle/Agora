import React from 'react';

//** TODO : REFACTOR FOR HIDDEN STYLING

class AddProject extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      name: '',
      customer: '',
      description: '',
      // timeline: {
      //   startDate: '',
      //   endDate: 'tomorrow',
      //   status: 'new',
      // }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
  }

  addProject(object) {
    console.log(name);
    fetch('/projects', {
      method: POST,
      body: JSON.stringify(object),
    });
  }
=======
      nameVal: '',
      customerVal: '',
      projectDescVal: '',
      timeline: {
        startDate: '',
        endDate: 'tomorrow',
        status: 'new',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  // addProject(object) {
  //   console.log(name);
  //   fetch('/projects', {
  //     method: POST,
  //     body: JSON.stringify(object),
  //   });
  // }

// EXAMPLE DATABASE VALUE:

// project: {
//  name: string
//  customer: string OR number
//  description: string
//  *** ?? timeline: {endDate: DATE, startDate: DATE, status: string}
// }
//

>>>>>>> created addProject component, added form methods for modifying state and sending request

  handleChange (e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.addProject(this.state);
  }

<<<<<<< HEAD
  // handleDateChange(e) {
  //   this.setState({
  //     timeline: {
  //       startDate: e.target.value,
  //     }
  //   });
  //   console.log(this.state.timeline);
  // }
=======
  handleDateChange(e) {
    this.setState({
      timeline: {
        startDate: e.target.value,
      }
    });
    console.log(this.state.timeline);
  }
>>>>>>> created addProject component, added form methods for modifying state and sending request

  render() {
    return (
      <div>
        <form method="post" className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Project Name:</legend>
<<<<<<< HEAD
              <input type="text" id="newProjectName" name="name" value={this.state.nameVal} onChange={this.handleChange}></input>
            <legend>Customer:</legend>
              <input type="text" id="customerName" name="customer" value={this.state.customerVal} onChange={this.handleChange}></input>
            <legend>Project Description:</legend>
              <input type="text" id="projectDescription" name="description" value={this.state.projectDescVal} onChange={this.handleChange}></input>
=======
              <input type="text" id="newProjectName" name="nameVal" value={this.state.nameVal} onChange={this.handleChange}></input>
            <legend>Customer:</legend>
              <input type="text" id="customerName" name="customerVal" value={this.state.customerVal} onChange={this.handleChange}></input>
            <legend>Project Description:</legend>
              <input type="text" id="projectDescription" name="projectDescVal" value={this.state.projectDescVal} onChange={this.handleChange}></input>
>>>>>>> created addProject component, added form methods for modifying state and sending request
          </fieldset>
          <button id="newProjectButton" type="submit"> Add Project </button>
        </form>
      </div>
    )
  }
}

export default AddProject;