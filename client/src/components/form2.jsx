import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react'

var From2 = (props) => (
  <div>
    <Container>
    <h1> Professional experience </h1>
    <Form onSubmit={(e) => { props.renderForm3(e)}} onChange={(e) => { props.updateStateFromForm2(e) }}>
      <div>
        <label for="yearsExperience">Years of Experience:</label>
        <input type="text" name="yearsExperience"></input>
      </div>
      <div>
      <Form.Group widths='equal'>
        <label for="language">Preferred coding language</label>
        <select name="language">
          <option value=""> -- Select a language -- </option>
          <option value="javascript"> Javascript </option>
          <option value="python"> Python </option>
          <option value="c"> C </option>
        </select>
        <label for="languageSkill">Level of Knowledge: </label>
        <select name="languageSkill">
          <option value=""> -- Select a level -- </option>
          <option value="high"> High </option>
          <option value="medium"> Medium </option>
          <option value="low"> Low </option>
        </select>
      </Form.Group>
      </div>

      <div>
      <Form.Group widths='equal'>
        <label for="frontEndFramework"> Preferred frontend framework </label>
        <select name="frontEndFramework">
          <option value=""> -- Select a frontend framework -- </option>
          <option value ="angular"> Angular </option>
          <option value = "backbone"> Backbone </option>
          <option value = "react"> React </option>
        </select>
        <label for="frontEndFrameworkSkill"> Level of Knowledge </label>
        <select name="frontEndFrameworkSkill">
          <option value=""> -- Select a level -- </option>
          <option value="high"> High </option>
          <option value="medium"> Medium </option>
          <option value="low"> Low </option>
        </select>
      </Form.Group>
      </div>
      <div>
      <Form.Group widths='equal'>
        <label for="backEndFramework"> Preferred backend framework </label>
        <select name="backEndFramework">
          <option value=""> -- Select a backend framework -- </option>
          <option value="node"> Node </option>
          <option value="ruby"> Ruby </option>
          <option value="django"> Django </option>
        </select>
        <label for="backEndFrameworkSkill"> Level of Knowledge </label>
        <select name="backEndFrameworkSkill">
          <option value=""> -- Select a level -- </option>
          <option value="high"> High </option>
          <option value="medium"> Medium </option>
          <option value="low"> Low </option>
        </select>
      </Form.Group>
      </div>
      <div>
        <Button primary type="submit"> Submit </Button>
      </div>
    </Form>
    </Container>
  </div>

);

export default From2;