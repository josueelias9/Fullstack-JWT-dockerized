
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import React, { useState } from 'react';

function CompLogin() {

    const [token, setToken] = useState(null);

    function hola(event){
        event.preventDefault();

        async function mipost() {
            let response;
            let json;
            let extra;

            extra = {
                method: 'post',
            };
            response = await fetch("http://localhost:3001/api/login", extra);
            json = await response.json();
            setToken(await json.token);

            console.log(json);

            localStorage.setItem('token',token);
        }
        mipost();
    }

    return  <Container>
    <h1>estas en la vista login</h1>
    <Form onClick={hola}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form></Container>;



}

export default CompLogin;