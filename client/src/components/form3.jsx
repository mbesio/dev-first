import React from 'react';
import ReactDOM from 'react-dom';

var From3 = (props) => (
  <div>
    <h1> Interests </h1>
    <form>
      <div>
        <input type="checkbox" name="healthAndWellness"></input>
        <label for="healthAndWellness"> Health and Wellness </label>
      </div>
      <div>
        <input type="checkbox" name="dataStorageAndSecurity"></input>
        <label for="dataStorageAndSecurity"> Data Storage and Security </label>
      </div>
      <div>
        <input type="checkbox" name="customerRelationshipManagement"></input>
        <label for="customerRelationshipManagement"> Customer Relationship Management </label>
      </div>
      <div>
        <input type="checkbox" name="travel"></input>
        <label for="travel"> Travel </label>
      </div>
      <div>
        <button type="submit"> Submit </button>
      </div>
    </form>
  </div>
);

export default From3;