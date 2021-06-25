import React, { useState } from 'react'
import { Button, TextField, Typography } from '@material-ui/core';
import { auth } from '../../firebase';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

import './Signup.css';
import Logo from '../../images/logo.svg';

function Signup() {

    const history = useHistory();

    // So these are the states of the this component
    // states: email, password
    const [email, setEmail] = useState('default_email');
    const [password, setPassword] = useState('default_password');

    const handleChangeEmail = (abc) => {
        const valueFromTextField = abc.target.value;

        setEmail(valueFromTextField);
    }

    function handleChangePassword (changeEvent) {
        const valueFromTextField = changeEvent.target.value;

        setPassword(valueFromTextField);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then(createdUser => {

            alert('a new user is registered');

            // in App.js we declared the route for UserEdit page
            // as /UserEdit/:id
            history.push('/UserEdit/' + createdUser.user.uid);

        })
        .catch(error => {

            alert(error.message);
        })

    }

    const handleSignInWithGoogle = (event) => {
        event.preventDefault();

        var googleProvider = new firebase.auth.GoogleAuthProvider;

        auth
        .signInWithPopup(googleProvider)
        .then(() => {
            
            alert('Registered with Google!');
        })
        .catch(error => {

            alert(error.message);
        })

    }


    return (
        <div className='signup__container'>

            <div className="signup__panel">

                {/* company logo */}
                <img src={Logo} alt="company_logo" />

                <Typography 
                    variant='body1' 
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                >
                    Register with either your e-mail or a social provider below.
                </Typography>

                {/* email address field */}
                <TextField 
                    label='Email address'
                    variant='outlined'
                    fullWidth
                    className='register__textInput'
                    onChange={handleChangeEmail}
                />

                {/* password field */}
                <TextField 
                    label='Password'
                    variant='outlined'
                    type='password'
                    fullWidth
                    className='register__textInput'
                    onChange={handleChangePassword}
                />

                {/* continue button */}
                <Button 
                    variant="contained" 
                    style={{
                        backgroundColor: '#0d88e2',
                        color: 'white',
                        padding: 10,
                        marginBottom: 20,
                    }}
                    fullWidth
                    onClick={handleSubmit}    
                >
                    Continue
                </Button>

                <Typography
                    variant='body1'
                    style={{
                        marginTop: 20,
                        marginBottom: 40,
                    }}
                >
                    Already have an account? Log in
                </Typography>

                OR

                {/* Continue with Google */}
                <Button 
                    variant="contained" 
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 10,
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                    fullWidth
                    onClick={handleSignInWithGoogle}    
                >
                    Continue with Google
                </Button>
            
            </div>


        </div>
    )
}

export default Signup
