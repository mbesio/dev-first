import React from 'react';
import ReactDOM from 'react-dom';

var Jobs = (props) => (
  <div>
    <h1> Recommended jobs based on your profile </h1>
      <h3>Tailored job number 1</h3>
        <div> Company: {props.state.job0.company}</div>
        <div> Title: {props.state.job0.title}</div>
        <div> Description: {props.state.job0.description}</div>
        <div> Location: {props.state.job0.location}</div>
      <h3>Tailored job number 2</h3>
        <div> Company: {props.state.job0.company}</div>
        <div> Title: {props.state.job0.title}</div>
        <div> Description: {props.state.job0.description}</div>
        <div> Location: {props.state.job0.location}</div>
      <h3>Tailored job number 3</h3>
        <div> Company: {props.state.job2.company}</div>
        <div> Title: {props.state.job2.title}</div>
        <div> Description: {props.state.job2.description}</div>
        <div> Location: {props.state.job2.location}</div>
  </div>
);

export default Jobs;