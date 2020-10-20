// example of statless component below
import React from 'react';
import ReactDOM from 'react-dom';

var Landing = (props) => (
  <div>
    <h1> Welcome to devfirst.io </h1>
    <h2> Land your dream software engineering job today </h2>
    <div>
      <button type = "button" name = "Signup" onClick = {() => console.log('hello, signup button clicked')}> Signup </button>
      <button type = "button" name = "Login" onClick = {() => console.log('hello, login button clicked')}> Login </button>
    </div>
  </div>
);

export default Landing;