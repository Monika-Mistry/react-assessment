import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Button,
    FormFeedback
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function LoginForm(props) {
    const isLoggedIn = props.isLoggedIn;
    const user = props.user;
    const isPassword = props.isPassword;
    const isUser = props.isUser;

    return (
        <Form className="container" onSubmit={props.loginUser}>
            <FormGroup row>
                <Label for="username" sm={2}>Username:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        invalid={!isUser}
                        valid={isLoggedIn}
                    />
                    <FormFeedback invalid>Username is incorrect</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="password" sm={2}>Password:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        invalid={!isPassword}
                        valid={isLoggedIn}
                    />
                    <FormFeedback invalid>Password is incorrect</FormFeedback>
                </Col>
            </FormGroup>
            <div className="text-center">
                <Button>Login</Button>
            </div>
            <br />
            {isLoggedIn && <h1 className="text-center text-success">{user} Logged In</h1>}
        </Form>
    )
}

LoginForm.propTypes = {
    isLoggedIn: PropTypes.bool,
    isPassword: PropTypes.bool,
    isUser: PropTypes.bool,
    user: PropTypes.string
}

LoginForm.defaultProps = {
    isLoggedIn: false,
    isPassword: true,
    isUser: true,
    user: ""
}
