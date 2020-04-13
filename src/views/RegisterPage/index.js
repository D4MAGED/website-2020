import { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

var requirements = {
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  password: undefined,
  confirmpassword: undefined,
  termsandconditions: undefined
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: undefined,
      lastname: undefined,
      email: undefined,
      password: undefined,
      confirmpassword: undefined,
      termsandconditions: undefined
    };
  }

  handleChange = event => {
    const { info, value } = event.target;

    this.setState({
      [info]: value
    });
    console.log(this.state);
  };

    event.preventDefault();
    var attributeList = [];
    
    var dataEmail ={
      Name: 'email',
      Value: this.state.email
    };
    var dataPersonalName ={
      Name: 'name',
      Value: this.state.firstname
    };
    var dataFamilyName = {
      Name: 'family_name',
      Value: this.state.lastname
    };
    attributeList.push(dataEmail);
    attributeList.push(dataPersonalName);
    attributeList.push(dataFamilyName);
    UserPool.signUp(this.state.firstname, this.state.password, attributeList, null, (err, data) => {
      if (err){
        if(err.message != null && error_flag == 0){
          error_flag = 1;
          document.getElementById("display_error").innerHTML = err.message;
          document.getElementById("display_error").style.color = "#ff0000";
        }
      }
      if(error_flag == 0) this.props.history.push('/');
    });

   
  }
  render() {
    return (
      <Form className="inputForm">
        <Form.Group controlId="inputForm.firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            name="firstname"
            type="text"
            placeholder=""
            value={this.state.firstname}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            name="lastname"
            type="text"
            placeholder=""
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirm password"
            required
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.termsandconditions">
          <Form.Label>Do you aceept the terms and conditions?</Form.Label>
          <Form.Control
            name="termsandconditions"
            required
            type="text"
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Check
            inline
            disables
            className="radio-btn"
            label="Yes"
            type="radio"
            id="yesTC"
          />
          <Form.Check inline disables label="No" type="radio" id="noTC" />
        </Form.Group>

        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/login">
            Submit
          </Link>
        </Button>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Form>
    );
  }
}

export default RegisterPage;
