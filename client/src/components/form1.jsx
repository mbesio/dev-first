import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react'

var Form1 = (props) => (
  <div>
    <Container>
    <h1> Personal information </h1>
    <Form onSubmit={(e) => { props.renderForm2(e)}} onChange={(e) => {props.updateStateFromForm1(e)}}>
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
        <input type="password" name="password"></input>
      </div>
      <div>
        <label for="location"> Location: </label>
        <input type="text" name="location"></input>
      </div>
      <div>
        <label>Add a profile picture </label>
        <input type="file" onChange={(e) => {props.addPicture(e)}}></input>
      </div>
      <div>
        <Button primary type="submit"> Submit </Button>
      </div>
    </Form>
    </Container>
  </div>
);

export default Form1;