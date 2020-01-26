import React from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handelSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sign-in-form">
                <h2>I have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit} >
                    <div>
                        <FormInput name="email" 
                                type="email" 
                                value={this.state.email} 
                                handleChange={this.handleChange}
                                required
                                label="email" />
                    </div>
                    <div>
                        <FormInput name="password" 
                                type="password" 
                                value={this.state.password} 
                                handleChange={this.handleChange}
                                required
                                label="password" />
                    </div>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;