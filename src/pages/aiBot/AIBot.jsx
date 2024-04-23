import React, { useState } from 'react';
import './AIBot.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Btn from '../../components/btn/Btn';
import aiBotImg1 from '../../assets/img/aiBotImg1.png';
import aiBotImg2 from '../../assets/img/aiBotImg2.png';
import arrowImg from '../../assets/img/arrowImg.png';
import Footer from '../../components/footer/Footer';
import QuestionAnswer from '../../components/questionAnswer/QuestionAnswer';
import bot from '../../assets/img/bot.png';
import arrow1 from '../../assets/img/arrow1.png';


export default function AIBot() {


    const questions1 = [
        {
            question: "What is Nexa Career and its mission?",
            answer: " Our mission is to guide students transitioning from high school to bachelor's degrees and graduates seeking job opportunities, facilitating well-informed and strategic career decisions."
        },
        {
            question: "Who can benefit from Nexa Career's services?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "How does Nexa Career provide career counseling?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "Are the counseling sessions confidential?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "How does Nexa Career provide career counseling?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
    ]

    const questions2 = [
        {
            question: "How can I schedule a counseling session with Nexa Career?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "What types of resources does Nexa Career offer?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "Is there a fee for Nexa Career's services?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "How does Nexa Career provide career counseling?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question: "How does Nexa Career provide career counseling?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
    ]


    return (
        <div>
            <NavBar />
            <section className='aiBot-hero'>
                {/* main hero  */}
                <div className="aiBot-heading1 text-center" >World-class <span>AI</span> for education
                    & Career</div>
                <div className="aiBot-subHeading">Say hello to NextBOT, Nexa Career’s AI-powered guide. Tutor for learners. Assistant for teachers.</div>
                <div className="aiBot-hero-btns">
                    <Btn
                        label='Get NextBOT'
                        style={{ background: '#FFA63D' }}
                    />
                    <Btn
                        label='Subscribe to Newsletter'
                        style={{ background: 'transparent' }}
                    />
                </div>
                <div className="text-center" style={{ marginTop: '50px' }}>
                    <img src={bot} alt="img" width='300px' />

                </div>
            </section>
            {/* section 2  */}
            <section className="aiBot-sec2-padding">
                <img src={arrow1} className='aiBot-arrow1' alt="arrow" />
                <Grid container spacing={5}>
                    <Grid item sm={7} xs={12}>
                        <div className="heading1" style={{ paddingRight: '7%' }}>Get a <span>glimpse</span> of the future of learning.</div>
                        <div className="aiBot-subHeading1">Created by experts, Nexa Career’s library of trusted practice and lessons covers math, science, and more. Always free for learners.
                            <br /> <br />
                            With Nexa Academy, We can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.
                        </div>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <img src={aiBotImg1} alt="img" width='100%' />
                    </Grid>
                </Grid>
            </section>
            {/* section 3  */}
            <section className="aiBot-sec2-padding aiBot-sec3">
                <Grid container spacing={5}>
                    <Grid item sm={7} xs={12}>
                        <div className="heading2" style={{ paddingRight: '7%', marginBottom:'40px' }}>Tutoring for all</div>
                        <div className="aiBot-subHeading1">
                            Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
                            <br /> <br />
                             Created by experts, Nexa Career’s library of trusted practice and lessons covers math, science, and more. Always free for learners.
                        <br /><br />
                        With Nexa Academy, We can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.    
                        </div>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <div className='text-center'>
                        <img src={aiBotImg2} className='aiBotImg2-style' alt="img" width='80%' />
                            </div>
                    </Grid>
                    {/* 2nd  */}
                    <Grid item sm={5} xs={12}>
                        <div>
                        <img src={aiBotImg2} className='aiBotImg2-style' alt="img" width='80%' />
                            </div>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item sm={6} xs={12}>
                        <div className="heading2" style={{ marginBottom:'40px' }}>Empowering educators</div>
                        <div className="aiBot-subHeading1" style={{paddingRight:'0px'}}>
                            Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
                            <br /> <br />
                             Created by experts, Nexa Career’s library of trusted practice and lessons covers math, science, and more. Always free for learners.
                        <br /><br />
                        With Nexa Academy, We can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.    
                        </div>
                    </Grid>
                    {/* 3rd */}
                    <Grid item sm={7} xs={12}>
                        <div className="heading2" style={{ paddingRight: '7%', marginBottom:'40px' }}>Unlocking creativity</div>
                        <div className="aiBot-subHeading1">
                            Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
                            <br /> <br />
                             Created by experts, Nexa Career’s library of trusted practice and lessons covers math, science, and more. Always free for learners.
                        <br /><br />
                        With Nexa Academy, We can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.    
                        </div>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <div className='text-center'>
                        <img src={aiBotImg2} className='aiBotImg2-style' alt="img" width='80%' />
                            </div>
                    </Grid>
                </Grid>
            </section>

            {/* section 4  */}
            <section className="padding">
                <div className="home-sec7-bar" />
                <div className="heading1 heading1-home text-center" >Revolutionizing For <span>Career</span> Future</div>
                <div className="subHeading1 text-center">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning. </div>
                <div className='home-sec7-questionsBox'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            {questions1.map(item => (
                                <QuestionAnswer
                                    key={item?.question}
                                    question={item?.question}
                                    answer={item?.answer}
                                />
                            ))}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            {questions2.map(item => (
                                <QuestionAnswer
                                    key={item?.question}
                                    question={item?.question}
                                    answer={item?.answer}
                                />
                            ))}
                        </Grid>
                    </Grid>
                </div>
                <div className='home-sec7-btnsBox'>
                    <Btn
                        label='Contact Us'
                    />
                    <Btn
                        label='Explore Jobs'
                        style={{ background: '#FFA63D' }}
                    />
                    <img src={arrowImg} className='home-arrowImg' alt="img" />
                </div>
            </section>
            {/* footer  */}
            <Footer />

        </div>
    )
}