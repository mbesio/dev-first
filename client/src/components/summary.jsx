import React from 'react';
import ReactDOM from 'react-dom';

var Summary = (props) => (
  <div>
      <h1> Is everything correct? </h1>

      <h3> Personal information </h3>
      <div>firstName: {props.state.firstName} </div>
      <div>lastName: {props.state.lastName} </div>
      <div>email: {props.state.email} </div>
      <div>password: {props.state.password}</div>
      <div>location: {props.state.location}</div>

      <h3> Professional experience </h3>
      <div>yearsExperience: {props.state.yearsExperience}</div>
      <div>language: {props.state.language}</div>
      <div>languageSkill: {props.state.languageSkill}</div>
      <div>frontEndFramework: {props.state.frontEndFramework}</div>
      <div>frontEndFrameworkSkill: {props.state.frontEndFrameworkSkill}</div>
      <div>backEndFramework: {props.state.backEndFramework}</div>
      <div>backEndFrameworkSkill: {props.state.backEndFrameworkSkill}</div>

      <h3> Interests </h3>
      {props.state.healthAndWellness && <div> ✓ healthAndWellness</div>}
      {props.state.dataStorageAndSecurity && <div> ✓ dataStorageAndSecurity</div>}
      {props.state.customerRelationshipManagement && <div> ✓ customerRelationshipManagement </div>}
      {props.state.travel && <div> ✓ travel </div>}

      <div>
        <button type = "button" name = "Confirm" onClick = {(e) => {props.renderJobs(e)}}> This is correct, show me tailored jobs! </button>
        <button type = "button" name = "Update" onClick = {() => console.log('I want to update my preferences')}> I want to update my profile </button>
      </div>

  </div>

);

export default Summary;