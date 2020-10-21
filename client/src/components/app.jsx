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
      aerospace: false,
      construction: false,
      education: false,
      energy: false,
      entertainment: false,
      finance: false,
      food: false,
      healthcare: false,
      hospitality: false,
      tech: false,
      telco: false,
      transport: false,

      // tailored jobs
      job0: {},
      job1: {},
      job2: {}
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
    this.addUserProfile = this.addUserProfile.bind(this);
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

  renderJobs() {
    //e.preventDefault();
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

  // add a method to go write user profile information in the database
  addUserProfile() {
    // get request to go post some data
    axios.post('/newuser', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location,
      yearsExperience: this.state.yearsExperience,
      language: this.state.language,
      languageSkill: this.state.languageSkill,
      frontEndFramework: this.state.frontEndFramework,
      frontEndFrameworkSkill: this.state.frontEndFrameworkSkill,
      backEndFramework: this.state.backEndFramework,
      backEndFrameworkSkill: this.state.backEndFrameworkSkill,
      aerospace: this.state.aerospace,
      construction: this.state.construction,
      education: this.state.education,
      energy: this.state.energy,
      entertainment: this.state.entertainment,
      finance: this.state.finance,
      food: this.state.food,
      healthcare: this.state.healthcare,
      hospitality: this.state.hospitality,
      tech: this.state.tech,
      telco: this.state.telco,
      transport: this.state.transport
    })
      .then((res) => {
        console.log('posted a new user record to the database!');
        console.log('Res ', res);
      })
  }


  // method to get tailored jobs for users
  getTailoredJobs() {
    var language = this.state.location;
    var keyword0 = this.state.language;
    var keyword1 = this.state.frontEndFramework;
    var keyword2 = this.state.backEndFramework;
    axios({
      method: 'get',
      url: '/jobs',
      params: {
        location: language,
        keyWords: [keyword0, keyword1 , keyword2]
      }
    })
      .then( (data) => {
        console.log('data: ', data.data);
        this.setState({
          job0: data.data[0],
          job1: data.data[1],
          job2: data.data[2],
          reviewIsVisible: false,
          jobsIsVisible: true
        })
      })
  }

  render() {
    return (
      <div>
        { this.state.landingIsVisible && <Landing renderForm1 = {this.renderForm1}/>}
        { this.state.form1IsVisible && <Form1 renderForm2 = {this.renderForm2} updateStateFromForm1={this.updateStateFromForm1} />}
        { this.state.form2IsVisible && <Form2 renderForm3 = {this.renderForm3} updateStateFromForm2={this.updateStateFromForm2}/>}
        { this.state.form3IsVisible && <Form3 renderSummary = {this.renderSummary} updateStateFromForm3={this.updateStateFromForm3}/>}
        { this.state.reviewIsVisible && <Summary getTailoredJobs = {this.getTailoredJobs} addUserProfile={this.addUserProfile} state = {this.state} />}
        { this.state.jobsIsVisible && <Jobs state = {this.state} />}
      </div>
    );
  }
}

export default App;
