import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Button
} from 'reactstrap';


export default function RegisterForm(props) {
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
                <Label for="email" sm={2}>Email:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
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
            <FormGroup row>
                <Label for="password2" sm={2}>Re-enter Password:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="password2"
                        id="password2"
                        placeholder="Enter your password again"
                    />
                </Col>
            </FormGroup>
            <div className="text-center">
                <Button>Register</Button>
            </div>
        </Form>
    )
}