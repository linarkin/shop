import React from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handelSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sign-in-form">
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
                    <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;