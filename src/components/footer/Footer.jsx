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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import forward from '../../assets/img/forward.png'
import Btn from '../btn/Btn'


export default function Footer() {
    const data1 = [facebook, twitter, linkedin, p]
    const links = ['Jobs', 'AI Bot', 'Contact Us', 'Quizes'];
    return (
        <div className='footer-main'>
            <img src={pattern1} alt="pattern" className='footer-pattern1' />
            <img src={pattern2} alt="pattern" className='footer-pattern2' />
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
                    <Grid item sm={3.5} xs={12}>
                        <img src={logo} alt="logo" className="footer-logo" />
                        <div className="footer-text footer-right-padding">Lorem ipsu dolor amet, consectetur sell adipis elit phase nibh ellentes</div>
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
                    <Grid item sm={2.75} xs={12} >
                        <div className="footer-heading">Useful Links</div>
                        {links && links.length > 0 &&
                        links.map(item => {
                            return (
                                <div className="footer-link-text" key={item}>
                                    <ArrowForwardIosIcon sx={{color: '#FFA63D', fontSize: '14px'}}/>
                                     {item}
                                </div>
                            )
                        })
                        }
                    </Grid>
                    <Grid item sm={3} xs={12} >
                        <div className="footer-heading">Contact</div>
                        <div className="footer-item">
                            <div style={{marginTop:'5px'}}>
                            <EmailIcon sx={{color: '#FFA63D', fontSize: '20px'}}/>
                            </div>
                            <div className="footer-text footer-right-padding ">lorem ispum@example.com</div>
                        </div>
                        <div className="footer-item">
                            <div style={{marginTop:'5px'}}>
                            <PlaceIcon sx={{color: '#FFA63D', fontSize: '20px'}}/>
                            </div>
                            <div className="footer-text footer-right-padding">Lorem alphonso davies,Las Vegas 62639</div>
                        </div>
                    </Grid>
                    <Grid item sm={2.75} xs={12} >
                        <div className="footer-heading">Contact</div>
                        <div className="footer-text">Lorem Ipsum is simp the a dumiomy is text Lorem Ipsum is simply</div>
                        <div style={{paddingTop:'15px'}}>
                            <InputField
                            placeholder='Your e-mail'
                            // style={{background:"#484848"}}
                            icon={forward}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="footer-lowest padding-x">
                <div className="footer-text">© Yoursitename  2023 | All Rights Reserved</div>
                <div className='footer-lowest-links'>
                    <div className="footer-text footerLink-hover">Terms & Conditions</div>
                    <div className="footer-text footerLink-hover">Privacy Policy</div>
                    <div className="footer-text footerLink-hover">Contact Us</div>
                </div>
            </div>
        </div>
    )
}
