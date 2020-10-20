import React from 'react';
import ReactDOM from 'react-dom';

var Form1 = (props) => (
  <div>
    <h1> Personal information </h1>
    <form onSubmit={(e) => { props.renderForm2(e)}} onChange={(e) => {props.updateStateFromForm1(e)}}>
      <div>
        <label for="firstName"> First Name: </label>
        <input type="text" name="firstName"></input>
      </div>
      <div>
        <label for="lastName"> Last Name: </label>
        <input type="text" name="lastName"></input>
      </div>
      <div>
        <label for="email"> Email: </label>
        <input type="text" name="email"></input>
      </div>
      <div>
        <label for="password"> Password: </label>
        <input type="text" name="password"></input>
      </div>
      <div>
        <label for="location"> Location: </label>
        <input type="text" name="location"></input>
      </div>
      <div>
        <button type="submit"> Submit </button>
      </div>
    </form>
  </div>
);

export default Form1;