import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';


const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let history = useHistory();

    // Fetch user data by email then redirect if successfull login
    let login = async (event) => {
        event.preventDefault();
        try {
            // Fetch user data by email
            let response = await axios.post('/api/login', {email, password})

            // Redirect if successfull login
            if(response.data){ 
                history.push('/')
            }
            
        } catch (error) {
            console.log()
        }
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={login}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(event)=> setEmail(event.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(event)=> setPassword(event.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>Sign In</Button>
            </Form>
        </FormContainer>
    )
}

export default Login
 