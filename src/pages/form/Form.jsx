import React, { useEffect, useState } from 'react';
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
import CancelIcon from '@mui/icons-material/Cancel';
import universityFields from '../../assets/json/universityFields.json';

export default function Form() {
    let [userObj, setUserObj] = useState({});
    let [interestVal, setInterestVal] = useState('');
    let [interesets, setInterests] = useState([]);

    const handleVal = (key, val) => {
        setUserObj({ ...userObj, [key]: val });

    }


    console.log(userObj)
    const addInterest = () => {
        if(interestVal === '') return;
        setInterests([...interesets, interestVal]);
        // setUserObj({ ...userObj, interests: [...interesetsArr] });
        setInterestVal('');
        // console.log(userObj);
    }

    const removeInterest = (index) => {
        interesets.splice(index, 1);
        setInterests([...interesets]);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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
                                onChange={(e) => handleVal('name', e.target.value)}
                                style={{ border: '1px solid lightgray' }} />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className="form-heading1">Academic Status:</div>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <SelectBox
                                placeholder='Select your Academic Status'
                                onSelect={(e) => handleVal('academicStatus', e)}
                                options={['Matric', 'Intermediate', 'Graduate']}
                            />
                        </Grid>
                        {
                            userObj.academicStatus === 'Matric' &&
                            <>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Percentage:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <InputField
                                        placeholder='Enter Your Matric Percentage'
                                        onChange={(e) => handleVal('percentage/cgpa', e.target.value)}
                                        style={{ border: '1px solid lightgray' }} />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Field:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <SelectBox
                                        placeholder='Select your Field'
                                        onSelect={(e) => handleVal('field/program', e)}
                                        options={['Bio Science', 'Computer Science', 'Arts']}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Interests:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <div className='form-sec2-interest-input'>
                                        <InputField
                                            placeholder='Enter Your Interest'
                                            value={interestVal}
                                            onChange={(e) => setInterestVal(e.target.value)}
                                            style={{ border: '1px solid lightgray' }} />
                                        <Btn
                                            label='Add'
                                            onClick={addInterest}
                                            hideArrow={true}
                                            style={{ padding: '20px 20px', }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="form-sec2-interests-box">
                                        {
                                            interesets.map((val, i) => <div key={i}>
                                                <span>{val}</span>
                                                <span
                                                    className='form-cursor'
                                                    onClick={() => removeInterest(i)}
                                                ><CancelIcon /> </span>
                                            </div>)
                                        }
                                    </div>
                                </Grid>
                            </>
                        }
                        {/* Intermediate section  */}
                        {
                            userObj.academicStatus === 'Intermediate' &&
                            <>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Percentage:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <InputField
                                        placeholder='Enter Your Intermediate Percentage'
                                        onChange={(e) => handleVal('percentage/cgpa', e.target.value)}
                                        style={{ border: '1px solid lightgray' }} />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Field:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <SelectBox
                                        placeholder='Select your Field'
                                        onSelect={(e) => handleVal('field/program', e)}
                                        options={['Pre Medical', 'Pre Engineering', 'Computer Science', 'Arts', 'Commerce']}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Interests:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <div className='form-sec2-interest-input'>
                                        <InputField
                                            placeholder='Enter Your Interest'
                                            value={interestVal}
                                            onChange={(e) => setInterestVal(e.target.value)}
                                            style={{ border: '1px solid lightgray' }} />
                                        <Btn
                                            label='Add'
                                            onClick={addInterest}
                                            hideArrow={true}
                                            style={{ padding: '20px 20px', }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="form-sec2-interests-box">
                                        {
                                            interesets.map((val, i) => <div key={i}>
                                                <span>{val}</span>
                                                <span
                                                    className='form-cursor'
                                                    onClick={() => removeInterest(i)}
                                                ><CancelIcon /> </span>
                                            </div>)
                                        }
                                    </div>
                                </Grid>
                            </>
                        }
                        {/* graduate section  */}
                        {
                            userObj.academicStatus === 'Graduate' &&
                            <>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">CGPA:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <InputField
                                        placeholder='Enter CGPA'
                                        onChange={(e) => handleVal('percentage/cgpa', e.target.value)}
                                        style={{ border: '1px solid lightgray' }} />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Program:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <SelectBox
                                        placeholder='Select your Program'
                                        onSelect={(e) => handleVal('field/program', e)}
                                        options={universityFields}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="form-heading1">Interests:</div>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <div className='form-sec2-interest-input'>
                                        <InputField
                                            placeholder='Enter Your Interest'
                                            value={interestVal}
                                            onChange={(e) => setInterestVal(e.target.value)}
                                            style={{ border: '1px solid lightgray' }} />
                                        <Btn
                                            label='Add'
                                            onClick={addInterest}
                                            hideArrow={true}
                                            style={{ padding: '20px 20px', }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="form-sec2-interests-box">
                                        {
                                            interesets.map((val, i) => <div key={i}>
                                                <span>{val}</span>
                                                <span
                                                    className='form-cursor'
                                                    onClick={() => removeInterest(i)}
                                                ><CancelIcon /> </span>
                                            </div>)
                                        }
                                    </div>
                                </Grid>
                            </>
                        }
                        <Grid item sm={8} xs={12}>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Btn
                                hideArrow={false}
                                label='Submit'
                                style={{margin:'0px 0px'}}
                            />
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
