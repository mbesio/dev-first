// transform to a statefull component that will hold the state for the entire application
import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Landing from './landing.jsx';
import Form1 from './form1.jsx';
import Form2 from './form2.jsx';
import Form3 from './form3.jsx';
import Summary from './summary.jsx';
import Jobs from './jobs.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    //
    this.state = {
      // State to decide which page to render to the screen
      landingIsVisible: true,
      form1IsVisible: false,
      form2IsVisible: false,
      form3IsVisible: false,
      reviewIsVisible: false,
      jobsIsVisible: false,
      // State to capture user profile
      // from 1 Information
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      location: '',
      // from 2 Information
      yearsExperience: '',
      language: '',
      languageSkill: '',
      frontEndFramework: '',
      frontEndFrameworkSkill: '',
      backEndFramework: '',
      backEndFrameworkSkill: '',
      //IndustryInterest, I could have all these industries potentially - https://www.cbinsights.com/research/tech-industry-exits/
      // from 3 Information
      healthAndWellness: false,
      dataStorageAndSecurity: false,
      customerRelationshipManagement: false,
      travel: false
    }
    this.renderForm1 = this.renderForm1.bind(this);
    this.renderForm2 = this.renderForm2.bind(this);
    this.renderForm3 = this.renderForm3.bind(this);
    this.renderSummary = this.renderSummary.bind(this);
    this.renderJobs = this.renderJobs.bind(this);

    this.updateStateFromForm1 = this.updateStateFromForm1.bind(this);
    this.updateStateFromForm2 = this.updateStateFromForm2.bind(this);
    this.updateStateFromForm3 = this.updateStateFromForm3.bind(this);

    this.getTailoredJobs = this.getTailoredJobs.bind(this);
  }

  renderForm1(e) {
    this.setState({
      landingIsVisible: false,
      form1IsVisible: true
    })
  }

  renderForm2(e) {
    e.preventDefault();
    this.setState({
      form1IsVisible: false,
      form2IsVisible: true
    })
  }

  renderForm3(e) {
    e.preventDefault();
    this.setState({
      form2IsVisible: false,
      form3IsVisible: true
    })
  }

  renderSummary(e) {
    e.preventDefault();
    this.setState({
      form3IsVisible: false,
      reviewIsVisible: true
    })
  }

  renderJobs(e) {
    e.preventDefault();
    this.setState({
      reviewIsVisible: false,
      jobsIsVisible: true
    })
  }

  updateStateFromForm1(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateStateFromForm2(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateStateFromForm3(e) {
    if (e.target.checked) {
      this.setState({
        [e.target.name]: true
      })
    } else {
      this.setState({
        [e.target.name]: false
      })
    }
  }

  getTailoredJobs() {
    axios({
      method: 'get',
      url: '/jobs',
      params: {
        location: 'California',
        keyWords: ['javascript', 'react' , 'node']
      }
    })
      .then( (data) => {
        console.log('data: ', data.data);
      })
  }

  render() {
    return (
      <div>
        { this.state.landingIsVisible && <Landing renderForm1 = {this.renderForm1}/>}
        { this.state.form1IsVisible && <Form1 renderForm2 = {this.renderForm2} updateStateFromForm1={this.updateStateFromForm1} />}
        { this.state.form2IsVisible && <Form2 renderForm3 = {this.renderForm3} updateStateFromForm2={this.updateStateFromForm2}/>}
        { this.state.form3IsVisible && <Form3 renderSummary = {this.renderSummary} updateStateFromForm3={this.updateStateFromForm3}/>}
        { this.state.reviewIsVisible && <Summary renderJobs = {this.renderJobs} getTailoredJobs={this.getTailoredJobs} state = {this.state} />}
        { this.state.jobsIsVisible && <Jobs />}
      </div>
    );
  }
}

export default App;
