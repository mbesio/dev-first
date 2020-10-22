// example of statless component below
import React from 'react';
import { Button } from 'semantic-ui-react';

var Landing = (props) => (
  <div >
    <h1> Welcome to devfirst.io </h1>
    <h2> Land your dream software engineering job today </h2>
    <div>
      <Button primary type = "button" name = "Signup" onClick = {(e) => { props.renderForm1(e) }}> Signup </Button>
      <Button primary type = "button" name = "Login" onClick = {() => console.log('hello, login button clicked')}> Login </Button>
    </div>
  </div>
);

export default Landing;