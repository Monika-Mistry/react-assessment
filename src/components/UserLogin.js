import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Button
} from 'reactstrap';

export default function UserLogin(props) {
    return (
        <Form className="container" onSubmit="">
            <FormGroup row>
                <Label for="username" sm={2}>Username:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="password" sm={2}>Password:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </Col>
            </FormGroup>
            <div className="text-center">
                <Button>Login</Button>
            </div>
        </Form>
    )
}