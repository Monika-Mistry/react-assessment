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


export default function RegisterForm(props) {
    const username = props.errors.username;
    const email = props.errors.email;
    const password = props.errors.password;
    const password2 = props.errors.password2;
    const isAdded = props.isAdded;

    return (
        <div>
            <Form className="container" onSubmit={props.addUser}>
                <FormGroup row>
                    <Label for="username" sm={2}>Username:</Label>
                    <Col sm={10}>
                        <Input
                            required
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            invalid={username !== undefined}
                            valid={isAdded}
                        />
                        <FormFeedback invalid>{username}</FormFeedback>
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
                            invalid={email !== undefined}
                            valid={isAdded}
                        />
                        <FormFeedback invalid>{email}</FormFeedback>
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
                            invalid={password !== undefined}
                            valid={isAdded}
                        />
                        <FormFeedback invalid>{password}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password2" sm={2}>Re-enter Password:</Label>
                    <Col sm={10}>
                        <Input
                            required
                            type="password"
                            name="password2"
                            id="password2"
                            placeholder="Enter your password again"
                            invalid={password2 !== undefined}
                            valid={isAdded}
                        />
                        <FormFeedback invalid>{password2}</FormFeedback>
                    </Col>
                </FormGroup>
                <div className="text-center">
                    <Button>Register</Button>
                </div>


            </Form>
            <br />
            {isAdded && <h1 className="text-center text-success">User Added</h1>}
        </div>
    )
}