import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Checkbox, Container } from 'semantic-ui-react'

var From3 = (props) => (
  <div>
    <Container>
    <h1> Interests </h1>
    <Form onSubmit={(e) => {props.renderSummary(e)}} onChange={(e) => {props.updateStateFromForm3(e)}}>
      <div>
        <input type="checkbox" name="aerospace"></input>
        <label for="aerospace"> Aerospace </label>
      </div>
      <div>
        <input type="checkbox" name="construction"></input>
        <label for="construction"> Construction </label>
      </div>
      <div>
        <input type="checkbox" name="education"></input>
        <label for="education"> Education </label>
      </div>
      <div>
        <input type="checkbox" name="energy"></input>
        <label for="energy"> Energy </label>
      </div>
      <div>
        <input type="checkbox" name="entertainment"></input>
        <label for="entertainment"> Entertainment </label>
      </div>
      <div>
        <input type="checkbox" name="finance"></input>
        <label for="finance"> Finance </label>
      </div>
      <div>
        <input type="checkbox" name="food"></input>
        <label for="food"> Food </label>
      </div>
      <div>
        <input type="checkbox" name="healthcare"></input>
        <label for="healthcare"> Healthcare </label>
      </div>
      <div>
        <input type="checkbox" name="tech"></input>
        <label for="tech"> Tech </label>
      </div>
      <div>
        <input type="checkbox" name="telco"></input>
        <label for="telco"> Telco </label>
      </div>
      <div>
        <input type="checkbox" name="transport"></input>
        <label for="transport"> Transport </label>
      </div>
      <div>
        <Button primary type="submit"> Submit </Button>
      </div>
    </Form>
    </Container>
  </div>
);

export default From3;