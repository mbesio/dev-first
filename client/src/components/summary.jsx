import React from 'react';
import noProfilePic from './images/noprofile.png'



var Summary = (props) => (
  <div>
      <h1> Is everything correct? </h1>

      <h3> Personal information </h3>
      <div>firstName: {props.state.firstName} </div>
      <div>lastName: {props.state.lastName} </div>
      <div>email: {props.state.email} </div>
      <div>password: {props.state.password}</div>
      <div>location: {props.state.location}</div>
      <div>profile picture</div>
      <img src={props.state.picture} width="200"/>

      <h3> Professional experience </h3>
      <div>yearsExperience: {props.state.yearsExperience}</div>
      <div>language: {props.state.language}</div>
      <div>languageSkill: {props.state.languageSkill}</div>
      <div>frontEndFramework: {props.state.frontEndFramework}</div>
      <div>frontEndFrameworkSkill: {props.state.frontEndFrameworkSkill}</div>
      <div>backEndFramework: {props.state.backEndFramework}</div>
      <div>backEndFrameworkSkill: {props.state.backEndFrameworkSkill}</div>

      <h3> Interests </h3>
      {props.state.aerospace && <div> ✓ Aerospace</div>}
      {props.state.construction && <div> ✓ Construction</div>}
      {props.state.education && <div> ✓ Education </div>}
      {props.state.energy && <div> ✓ Energy </div>}
      {props.state.entertainment && <div> ✓ Entertainment </div>}
      {props.state.finance && <div> ✓ Finance </div>}
      {props.state.food && <div> ✓ Food </div>}
      {props.state.healthcare && <div> ✓ Healthcare </div>}
      {props.state.hospitality && <div> ✓ Hospitality </div>}
      {props.state.tech && <div> ✓ Tech </div>}
      {props.state.telco && <div> ✓ Telco </div>}
      {props.state.transport && <div> ✓ Transport </div>}

      <div>
        <button type = "button" name = "Confirm" onClick = {() => {props.addUserProfile(); props.getTailoredJobs()}}> This is correct, show me tailored jobs! </button>
        <button type = "button" name = "Update" onClick = {() => console.log('I want to update my preferences')}> I want to update my profile </button>
      </div>

  </div>

);

export default Summary;