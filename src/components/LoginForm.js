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

export default function LoginForm(props) {
    const isLoggedIn = props.isLoggedIn;
    const user = props.user;
    const success = props.success

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
                        invalid={!success}
                        valid={isLoggedIn}
                    />
                    <FormFeedback invalid>Username or password is incorrect</FormFeedback>
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
                        invalid={!success}
                        valid={isLoggedIn}
                    />
                    <FormFeedback invalid>Username or password is incorrect</FormFeedback>
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