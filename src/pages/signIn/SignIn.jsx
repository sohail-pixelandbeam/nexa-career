import React, { useState } from 'react';
import './SignIn.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Btn from '../../components/btn/Btn';
import homeImg2 from '../../assets/img/homeImg2.png';
import arrowImg from '../../assets/img/arrowImg.png';
import Footer from '../../components/footer/Footer';
import QuestionAnswer from '../../components/questionAnswer/QuestionAnswer';
import formHeroImg from '../../assets/img/formHeroImg.png';
import InputField from '../../components/inputField/InputField';
import SelectBox from '../../components/selectBox/SelectBox';
import { BorderBottom } from '@mui/icons-material';

export default function SignIn() {



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
                    style={{ width: '100%', marginTop: '50px', background: '#FFA63D' }}
                />
                <div className="signIn-bottom-texts">
                    <div className="signIn-link-text">Forgot Password?</div>
                    <div className="signIn-bottom-text">New to Nexa Career?
                        <div className="signIn-link-text">Create Account</div>
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
