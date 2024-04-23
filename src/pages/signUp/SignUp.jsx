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

export default function SignUp() {

    const [activeStep, setActiveStep] = useState(1);
    const navigate = useNavigate();
    const steps = [1, 2, 3];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeStep])

    const moveToStep2 = () => {
        setActiveStep(2);
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
                                        className={`steper-step ${activeStep === step ? 'active' : ''}`}
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
