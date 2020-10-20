// transform to a statefull component that will hold the state for the entire application
import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './landing.jsx';
import Form1 from './form1.jsx';

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
      techStack1Skill: '',
      techStack1SkillLevel: '',
      techStack2Skill: '',
      techStack2SkillLevel: '',
      techStack3Skill: '',
      techStack3SkillLevel: '',
      //IndustryInterest, I could have all these industries potentially - https://www.cbinsights.com/research/tech-industry-exits/
      // from 3 Information
      healthAndWellness: false,
      dataStorageAndSecurity: false,
      customerRelationshipManagement: false,
      travel: false
    }
  }
  render() {
    return (
      <div>
        <Landing/>
        <Form1/>
      </div>
    );
  }
}

export default App;
