import React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

var Login = (props) => (
  <div>
    <Container>
      <h1> Login </h1>
      <Form onSubmit={() => { console.log('trying to login')} }>
        <div>
          <label for="email"> email </label>
          <input type="text" name="email"></input>
        </div>
        <div>
          <label for="password"> password </label>
          <input type="password" name="password"></input>
        </div>
        <div>
          <Button primary type="submit"> Login </Button>
        </div>
      </Form>
    </Container>
  </div>
);

export default Login;