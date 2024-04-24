import React, { useEffect, useState } from 'react';
import './SignUp.css';
import NavBar from '../../components/navbar/Navbar';
import Btn from '../../components/btn/Btn';
import Footer from '../../components/footer/Footer';
import InputField from '../../components/inputField/InputField';
import youngBoy from '../../assets/img/youngBoy.png';
import { Grid } from '@mui/material';
import { BorderBottom } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import OTPInput, { ResendOTP } from "otp-input-react";
import useIsMobile from '../../hooks/useIsMobile';
import SelectBox from '../../components/selectBox/SelectBox';

export default function SignUp() {

    const [activeStep, setActiveStep] = useState(1);
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const steps = [1, 2, 3];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeStep])

    const moveToStep2 = () => {
        setActiveStep(2);
    }

    const moveToStep3 = () => {
        setActiveStep(3);
    }

    return (
        <div>
            <NavBar active='SignUp' />
            <section className="signup-main">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="signup-left text-center">
                            <div className="steper-heading">Step {activeStep} of 3</div>
                            <div className="steper-mainBox">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`steper-step ${activeStep >= step ? 'active' : ''}`}
                                        onClick={() => setActiveStep(step)}
                                    >
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* 1st step  */}
                        {activeStep === 1 && <div className="step-content-box">
                            <div className="heading2">Sign up to Nexa Career</div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Full Name'
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Email Address'
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Phone Number'
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Create Password'
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <Btn
                                label='Continue'
                                onClick={moveToStep2}
                                style={{
                                    width: '100%',
                                    background: '#FFA63D',
                                    margin: '30px 0px'
                                }}
                            />
                            <div className="signIn-link-text" style={{ margin: '10px 0px' }}  ><LocalPhoneIcon fontSize='small' sx={{ color: '#FFA63D' }} /> +92 336 8174 230</div>
                            <div className="signIn-bottom-text">Already have an account?
                                <div className="signIn-link-text" onClick={() => navigate('/SignIn')} >Sign In</div>
                            </div>
                        </div>}
                        {/* 2nd step  */}
                        {activeStep === 2 && <div className="step-content-box">
                            <div className="heading2" style={{ marginTop: '5%' }}>OTP Registration</div>
                            <div className="input1-label" style={{ marginTop: '50px' }} >Enter your OTP <font className='required-style'>*</font></div>
                            {!isMobile && <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                                className="otp-input-box"
                                inputStyles={{ width: '90px', height: '90px', margin: '0 1rem', fontSize: '2rem', borderRadius: '8px', border: '1px solid lightgray' }}
                            />}
                            {isMobile && <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                                className="otp-input-box"
                                inputStyles={{ width: '50px', height: '5px', margin: '0 10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid lightgray' }}
                            />}

                            <Btn
                                label='Continue'
                                onClick={moveToStep3}
                                style={{
                                    width: '100%',
                                    background: '#FFA63D',
                                    margin: '80px 0px'
                                }}
                            />
                        </div>}
                        {/* 3rd step  */}
                        {activeStep === 3 && <div className="step-content-box">
                        <div className="input1-label" style={{ marginTop: '50px' }} >Hi Hadi!</div>
                            <div className="heading2">Tell Us More About Yourself</div>
                            <div className='inputBox-margintT'>
                                <SelectBox
                                label="I am a"
                                options={['Student', 'Teacher', 'Other']}
                                placeholder='Select one'
                                required={true}
                                />
                            </div>
                            <Btn
                                label='Continue'
                                onClick={moveToStep2}
                                style={{
                                    width: '100%',
                                    background: '#FFA63D',
                                    margin: '30px 0px'
                                }}
                            />
                            <div className="signIn-link-text" style={{ margin: '10px 0px' }}  ><LocalPhoneIcon fontSize='small' sx={{ color: '#FFA63D' }} /> +92 336 8174 230</div>
                            <div className="signIn-bottom-text">Already have an account?
                                <div className="signIn-link-text" onClick={() => navigate('/SignIn')} >Sign In</div>
                            </div>
                        </div>}
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="signUp-right">
                            <img src={youngBoy} alt="img" />
                            <div >Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.</div>
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* footer  */}
            <Footer />

        </div>
    )
}
