import React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

var Login = (props) => (
  <div>
    <Container>
      <h1> Login </h1>
      <Form onSubmit={() => { props.checkIfUserExists()} } onChange= {(e) => { props.updateLoginInfo(e) }}>
        <div>
          <label for="loginEmail"> email </label>
          <input type="text" name="loginEmail"></input>
        </div>
        <div>
          <label for="loginPassword"> password </label>
          <input type="password" name="loginPassword"></input>
        </div>
        <div>
          <Button primary type="submit"> Login </Button>
        </div>
      </Form>
    </Container>
  </div>
);

export default Login;