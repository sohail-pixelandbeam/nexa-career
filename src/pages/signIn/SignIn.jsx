import React, { useEffect, useState } from 'react';
import './SignIn.css';
import NavBar from '../../components/navbar/Navbar';
import Btn from '../../components/btn/Btn';
import Footer from '../../components/footer/Footer';
import InputField from '../../components/inputField/InputField';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const signInUser = () => {
        navigate('/')
    }

    return (
        <div>
            <NavBar />
            <section className='home-hero'>
                {/* main hero  */}
            </section>
            <div className="text-center SignInBox">
                <div className="heading2">Log in to Nexa Career</div>
                <InputField
                    placeholder='Email Address'
                    style={{ borderBottom: '1px solid lightgray', marginBottom: '20px', marginTop: '40px' }}
                />
                <InputField
                    placeholder='Password'
                    isPassword={true}
                    style={{ borderBottom: '1px solid lightgray', marginBottom: '20px' }}
                />
                <Btn
                    label='Log In'
                    onClick={signInUser}
                    style={{ width: '100%', marginTop: '50px', background: '#FFA63D' }}

                />
                <div className="signIn-bottom-texts">
                    <div className="signIn-link-text">Forgot Password?</div>

                    <div className="signIn-bottom-text">New to Nexa Career?
                        <div className="signIn-link-text" onClick={() => navigate('/signUp')}>Create Account</div>
                    </div>
                </div>
            </div>
            <section className="padding">

            </section>
            {/* footer  */}
            <Footer />

        </div>
    )
}
