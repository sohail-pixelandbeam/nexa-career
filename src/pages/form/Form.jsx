import React, { useState } from 'react';
import './Form.css';
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

export default function Form() {

    return (
        <div>
            <NavBar />
            <section className='home-hero'>
                {/* main hero  */}
                <Grid container spacing={1}>
                    <Grid item sm={6} xs={12}>
                        <div className="form-hero-left">
                            <div className="home-hero-heading"> <span>Your</span> <br />
                                Profile <br />
                                info
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="form-hero-right">
                            <img src={formHeroImg} alt="hero-img" />
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 2  */}
            <section className="padding form-sec2">
                <div className="heading1 text-center">Fill Out Our Form</div>
                <div className="subHeading1 text-center mb-70">Please fill in the asked for information to create your profile and proceed for the My Talent Assessment.</div>
                <div className="form-sec2-box">
                    <Grid container spacing={5}>
                        <Grid item sm={4} xs={12}>
                            <div className="form-heading1">Your Name:</div>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <InputField 
                            placeholder='Enter Your Name Here'
                            style={{ border: '1px solid lightgray' }} />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className="form-heading1">Academic Status:</div>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <SelectBox
                            placeholder='Select your Academic Status'
                            options={['Matric', 'Intermediate', 'Graduate', 'Post-Graduate']}
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className="form-heading1">E-mail Address:</div>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <InputField 
                            placeholder='Enter Your Email'
                            style={{ border: '1px solid lightgray' }} />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className="form-heading1">Password:</div>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <InputField 
                            placeholder='Enter Your Password'
                            style={{ border: '1px solid lightgray' }} />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className="form-heading1">Confirm Password:</div>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <InputField 
                            placeholder='Confirm Your Password'
                            style={{ border: '1px solid lightgray' }} />
                        </Grid>
                    </Grid>
                </div>

            </section>
            {/* section 6  */}
            <section className="padding home-sec6">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="home-sec5-right">
                            <img src={homeImg2} alt="img" />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="home-sec5-left">
                            <div className="heading1 heading1-home" >Every <span>Student</span> deserves the chance to learn.</div>
                            <div className="subHeading1 ">Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help.
                                <br /><br />
                                You can change the course of a student’s life.</div>
                            <Btn
                                label='Chat With AI Expert'
                            />
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* footer  */}
            <Footer />

        </div>
    )
}
