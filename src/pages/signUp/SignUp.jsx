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
import Snack from '../../components/snack/Snack';
import Loader from '../../components/loader/Loader';
// import emailjs from "@emailjs/browser";
import { db } from '../../config/FirebaseConfig';
import { Query, addDoc, collection, getDocs, where } from 'firebase/firestore/lite';
import { getCurrentDate, generateOTP } from '../../utils';
import { query } from 'firebase/firestore';

export default function SignUp() {

    const [userObj, setUserObj] = useState({});
    const [activeStep, setActiveStep] = useState(1);
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const steps = [1, 2];

    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');
    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }

    const handleVal = (key, val) => {
        setUserObj({ ...userObj, [key]: val });
    }

    //Firestore handling
    const usersRef = collection(db, "users");

    useEffect(() => {
        handleVal('joiningDate', getCurrentDate());
        handleVal('OTP', generateOTP());
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeStep])

    const moveToStep2 = async () => {
        setIsLoading(true);
        const { name, email, phoneNumber, password, OTP, joiningDate } = userObj;
        if (password && name && email && phoneNumber) {
            try {
                // Get all documents from the users collection
                const usersCollection = collection(db, 'users');
                const querySnapshot = await getDocs(usersCollection);
    
                // Check if email exists in any of the documents
                const emailExists = querySnapshot.docs.some(doc => doc.data().email === email);
    
                if (emailExists) {
                    setSnackMsg("Email already exists");
                    setSeverity("error");
                    setOpenSnack(true);
                    setIsLoading(false);
                    return; // Terminate the function
                }
    
                // If email doesn't exist, proceed with sending OTP
                const data = {
                    service_id: 'nexa-career',
                    template_id: 'template_1vnzs48',
                    user_id: 'oYKRBmPYmAeLWvmHP',
                    template_params: {
                        name,
                        email,
                        OTP,
                        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
                    }
                };
    
                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
    
                if (response.ok) {
                    setSnackMsg("OTP Sent Successfully");
                    setSeverity("success");
                    setOpenSnack(true)
                    setIsLoading(false)
                    setActiveStep(2);
                } else {
                    throw new Error('Failed to send email');
                }
            } catch (error) {
                console.error('Error moving to step 2:', error);
                setSnackMsg(error.message || 'Error moving to step 2');
                setSeverity("error");
                setOpenSnack(true);
                setIsLoading(false);
            }
        } else {
            setOpenSnack(true);
            setSnackMsg("Required Fields are missing.");
            setIsLoading(false);
        }
    }

    const verifyOTP = async () => {
          setIsLoading(true);
        if (userObj?.OTP === OTP) {

            try {
                await addDoc(usersRef, userObj);
                setSnackMsg("Account Created Successfully");
                setSeverity("success");
                setOpenSnack(true);
                setIsLoading(false);
                setTimeout(() => {
                    navigate("/SignIn");
                }, 2000)

            } catch (error) {
                console.log(error.text);
                setSnackMsg(error.message)
                setOpenSnack(true)
            }
        }
        else {
            setOpenSnack(true);
            setSnackMsg("Invalid OTP, Please Enter Correct OTP");
            setIsLoading(false);
            setOTP('');
        }
    }

    return (
        <div>
            <NavBar active='SignUp' />
            <section className="signup-main">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="signup-left text-center">
                            <div className="steper-heading">Step {activeStep} of {steps.length}</div>
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
                                    onChange={(e) => handleVal('name', e.target.value)}
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Email Address'
                                    onChange={(e) => handleVal('email', e.target.value)}
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Phone Number'
                                    onChange={(e) => handleVal('phoneNumber', e.target.value)}
                                    style={{ border: '1px solid lightgray' }}
                                />
                            </div>
                            <div className='inputBox-margintT'>
                                <InputField
                                    required
                                    label='Create Password'
                                    onChange={(e) => handleVal('password', e.target.value)}
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
                            <div className="input1-label">Your OTP has been sent to <b> {userObj?.email}</b>. Please check your inbox and enter the OTP. Remember, it's a one-time code.</div>
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
                                onClick={verifyOTP}
                                style={{
                                    width: '100%',
                                    background: '#FFA63D',
                                    margin: '80px 0px'
                                }}
                            />
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
            <Footer hideContact={true} />
            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </div>
    )
}
