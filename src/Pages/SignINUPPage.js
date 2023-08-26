import React, { useState } from 'react'
import '../components/signinup/SignInUp.css'

const SignINUPPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Handle sign in logic here
        console.log(`Sign in with ${signInEmail} and ${signInPassword}`);
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Handle sign up logic here
        console.log(`Sign up with ${signUpName}, ${signUpEmail}, and ${signUpPassword}`);
    };

    return (
        <div className="form">
            <div className="form-container">
                <div className="form-toggle">
                    <button onClick={() => setIsSignUp(true)}>Sign Up</button>
                    <button onClick={() => setIsSignUp(false)}>Sign In</button>
                </div>
                {isSignUp ? (
                    <form className='form-section' onSubmit={handleSignUpSubmit}>
                        <input type="text" placeholder='Name' value={signUpName} onChange={(e) => setSignUpName(e.target.value)} />
                        <input type="email" placeholder='E-Mail' value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />

                        <button type="submit">Sign Up</button>
                    </form>
                ) : (
                    <form className='form-section' onSubmit={handleSignInSubmit}>
                        <input type="email" placeholder='E-Mail' value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />

                        <button type="submit">Sign In</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default SignINUPPage