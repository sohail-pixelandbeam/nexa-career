import React from 'react'
import './Footer.css'
import pattern1 from '../../assets/img/pattern1.png'
import pattern2 from '../../assets/img/pattern2.png'
import { Grid, TextField } from '@mui/material'
import InputField from '../inputField/InputField'
import logo from '../../assets/img/logo.png'
import p from '../../assets/img/p.png'
import linkedin from '../../assets/img/linkedin.png'
import twitter from '../../assets/img/twitter.png'
import facebook from '../../assets/img/facebook.png'
import Btn from '../btn/Btn'


export default function Footer() {
    const data1 = [facebook, twitter, linkedin, p]
    return (
        <div className='footer-main'>
            <div className="footer-upper">
                <Grid container spacing={0}>
                    <Grid item sm={5.5} xs={12}>
                        <div className="footer-upper-left">
                            <div className="heading1">Every Student <br />
                                <span>Matters</span> For Us</div>
                        </div>
                    </Grid>
                    <Grid item sm={6.5} xs={12}>
                        <div className="footer-upper-right">
                            <div className="footer-contact-inputsBox">
                                <InputField
                                    placeholder='First Name...'
                                />
                                <InputField
                                    placeholder='Last Name...'
                                />
                            </div>
                            <InputField
                                placeholder='Your E-mail...' />
                            <div className="footer-contact-inputsBox">
                                <InputField
                                    placeholder='Your Phone...'
                                />
                                <button className='footer-btn'>
                                    Send Now
                                </button>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="padding foooter-lower">
                <Grid container spacing={0}>
                    <Grid item sm={3} xs={12}>
                        <img src={logo} alt="logo" className="footer-logo" />
                        <div className="footer-text">Lorem ipsu dolor amet, consectetur sell adipis elit phase nibh ellentes</div>
                        <div className="footer-social-icons">
                            {
                                data1.map((item, index) => {
                                    return (
                                        <div className="footer-social-icon">
                                            <img src={item} alt="icon" key={index} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
