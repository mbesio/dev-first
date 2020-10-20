// transform to a statefull component that will hold the state for the entire application
import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './landing.jsx';
import Form1 from './form1.jsx';
import Form2 from './form2.jsx';
import Form3 from './form3.jsx';

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
      recommendationsIsVisible: false,
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

  render() {
    return (
      <div>
        { this.state.landingIsVisible && <Landing renderForm1 = {this.renderForm1}/>}
        { this.state.form1IsVisible && <Form1 renderForm2 = {this.renderForm2}/>}
        { this.state.form2IsVisible && <Form2 renderForm3 = {this.renderForm3}/>}
        { this.state.form3IsVisible && <Form3/>}
      </div>
    );
  }
}

export default App;
