import React from 'react'
import './Footer.css'
import pattern1 from '../../assets/img/pattern1.png'
import pattern2 from '../../assets/img/pattern2.png'
import { Grid, TextField } from '@mui/material'
import InputField from '../inputField/InputField'
import logo from '../../assets/img/logo.png'
import x from '../../assets/img/x.png'
import linkedin from '../../assets/img/linkedin.png'
import twitter from '../../assets/img/twitter.png'
import facebook from '../../assets/img/facebook.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import twitter1 from '../../assets/img/twitter1.png'
import facebook1 from '../../assets/img/facebook1.png'
import linkedin1 from '../../assets/img/linkedin1.png'
import instagram1 from '../../assets/img/instagram1.png'
import instagram from '../../assets/img/instagram.png'
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import forward from '../../assets/img/forward.png'
import Btn from '../btn/Btn'
import {  useNavigate } from 'react-router-dom'


export default function Footer({ hideContact }) {
    const navigate = useNavigate()
    const data1 = [
        {
            img: facebook,
            name: 'facebook',
        },
        {
            img: x,
            name: 'twitter',
        },
        {
            img: linkedin,
            name: 'linkedin',
        },
        {
            img: twitter,
            name: 'twitter',
        },
    ]
    // const data1 = [facebook, twitter, linkedin, p]
    const links = [ {name:'AI Bot', to:'/AIBot'}, {name:'Contact Us', to:'/ContactUs'}];
    return (
        <div className='footer-main'>
            {/* <img src={pattern1} alt="pattern" className='footer-pattern1' />
            <img src={pattern2} alt="pattern" className='footer-pattern2' /> */}
            {hideContact || <div className="footer-upper" id='contact-us'>
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
            </div>}
            <div className="padding foooter-lower">
                <Grid container spacing={0}>
                    <Grid item sm={5} xs={12}>
                        <img src={logo} alt="logo" className="footer-logo" />
                        <div className="footer-text footer-right-padding">Comprehensive career guidance solutions for students, parents, educators and schools</div>
                        <div className="footer-social-icons">
                            {
                                data1.map((item, index) => {
                                    return (
                                        <div key={index} className="footer-social-icon">
                                            <img src={item.img} alt="icon" key={index}
                                                // style={{ width: item.name === 'instagram' ? '22px' : '14px' }}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item sm={3} xs={12} >
                        <div className="footer-heading">Useful Links</div>
                        {links && links.length > 0 &&
                            links.map(item => {
                                return (
                                    <div className="footer-link-text" key={item?.name}
                                    onClick={()=>navigate(item?.to)}
                                    >
                                        <ArrowForwardIosIcon sx={{ color: '#FFA63D', fontSize: '14px' }} />
                                        {item?.name}
                                    </div>
                                )
                            })
                        }
                    </Grid>
                    <Grid item sm={4} xs={12} >
                        <div className="footer-heading">Contact</div>
                        <div className="footer-item">
                            <div style={{ marginTop: '5px' }}>
                                <EmailIcon sx={{ color: '#FFA63D', fontSize: '20px' }} />
                            </div>
                            <div className="footer-text footer-right-padding ">saad.teckverticks@gmail.com</div>
                        </div>
                        <div className="footer-item">
                            <div style={{ marginTop: '5px' }}>
                                <PlaceIcon sx={{ color: '#FFA63D', fontSize: '20px' }} />
                            </div>
                            <div className="footer-text footer-right-padding">Bahria University, National Stadium Road, Karachi</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="footer-lowest padding-x">
                <div className="footer-text">© Nex-a-Career  2024 | All Rights Reserved</div>
                <div className='footer-lowest-links'>
                    <div className="footer-text footerLink-hover">Terms & Conditions</div>
                    <div className="footer-text footerLink-hover">Privacy Policy</div>
                    <div className="footer-text footerLink-hover">Contact Us</div>
                </div>
            </div>
        </div>
    )
}
