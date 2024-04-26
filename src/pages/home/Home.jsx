import React, { useEffect, useState } from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import heroImg from '../../assets/img/hero-img.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Btn from '../../components/btn/Btn';
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';
import icon4 from '../../assets/img/icon4.png';
import icon5 from '../../assets/img/icon5.png';
import icon6 from '../../assets/img/icon6.png';
import icon7 from '../../assets/img/icon7.png';
import icon8 from '../../assets/img/icon8.png';
import icon9 from '../../assets/img/icon9.png';
import icon10 from '../../assets/img/icon10.png';
import icon11 from '../../assets/img/icon11.png';
import icon12 from '../../assets/img/icon12.png';
import icon13 from '../../assets/img/icon13.png';
import homeImg1 from '../../assets/img/homeImg1.png';
import homeImg2 from '../../assets/img/homeImg2.png';
import person1 from '../../assets/img/person1.png';
import person2 from '../../assets/img/person2.png';
import person3 from '../../assets/img/person3.png';
import arrowImg from '../../assets/img/arrowImg.png';
import Footer from '../../components/footer/Footer';
import QuestionAnswer from '../../components/questionAnswer/QuestionAnswer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    let [activeTab, setActiveTab] = useState('For Students')
    const statsData = [
        {
            icon: icon1,
            title: 'Students Impacted',
            figures: '2.5 Million'
        },
        {
            icon: icon2,
            title: 'Educators Certified',
            figures: '40,000'
        },
        {
            icon: icon3,
            title: 'Partner Schools',
            figures: '250+'
        },

        {
            icon: icon4,
            title: 'University Partners',
            figures: '50+'
        },
    ]

    const data1 = [
        {
            icon: icon5,
            text: 'Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.'
        },
        {
            icon: icon6,
            text: 'Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs.'
        },
        {
            icon: icon7,
            text: 'Pave student’s way to their dream college with our end-to-end college application guidance,scholarship drive and corporate internship program.'
        },
        {
            icon: icon8,
            text: 'Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy'
        },
        {
            icon: icon9,
            text: 'Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling'
        },
        {
            icon: icon10,
            text: 'Revolutionary assessment platform and  technology driven career guidance solutions for educators to boost their career guidance & counselling practice'
        },

    ]

    const data2 = [
        {
            icon: icon11,
            title: 'Pool of 550+ career choices',
            text: "Find the perfect career pathway that's just right for you",
            btnText: 'Know Yourself Better',
            to:'/Form'
        },
        {
            icon: icon11,
            title: 'Personalised Psychometric Assessment',
            text: "Helps you to identify your Personality, Areas of Interest and Aptitude Level.",
            btnText: 'Know Yourself Better',
            to:'/Form'
        },
        {
            icon: icon12,
            title: 'Chat With Nexa',
            text: "Interact with Real Counselors, not Bots. Get answers for your quick career-related questions.",
            btnText: 'Professional Guidance',
            to:'/AIBot'
        },
        {
            icon: icon13,
            title: 'Pick The Right College',
            text: "We’ll help you choose the perfect college fit in Pakistan or Abroad.",
            btnText: 'Pakistan or Abroad',
            to:'/Form'
        }
    ]

    const data3 = [
        {
            icon: person1,
            title: "For Students"
        },
        {
            icon: person2,
            title: "For Institutions"
        },
        {
            icon: person3,
            title: "For Career Professionals"
        }
    ]

    const data4 = [
        {
            title1: 'Career Counselling Programs',
            title2: 'Class 8-9',
            title3: 'Stream & Subject Selection',
            text: 'Advanced assessment & personalised guidance to help you select the perfect stream and subjects that align you to the right careers.',
            btnText: 'View Program Details',
        },
        {
            title1: '.',
            title2: 'Class 10-12',
            title3: 'Career Selection & Planning',
            text: 'Expert guidance & 5-dimensional assessment to help you discover your perfect career and choose the right course and college.',
            btnText: 'View Program Details',
        },
        {
            title1: '.',
            title2: 'College and Graduates',
            title3: 'Career Selection & Development',
            text: '5-dimensional assessment & superior guidance to help you discover your perfect career and choose the best next step.',
            btnText: 'View Program Details',
        },
        {
            title1: 'EXPERIENTIAL CAREER PROGRAMS',
            title2: 'Virtual Internship Program',
            title3: ' ',
            text: 'Experiential, immersive self-paced program that helps students experience different careers and gives them practical exposure to these careers.',
            btnText: 'View Program Details',
        },
        {
            title1: 'COLLEGE APPLICATION PROGRAMS',
            title2: 'Overseas Application',
            title3: ' ',
            text: 'End-to-end overseas admissions guidance to help you build the perfect applications for your target universities.',
            btnText: 'View Program Details',
        },
        {
            title1: '.',
            title2: 'Liberal Arts Application',
            title3: '',
            text: 'Comprehensive guidance and personalised application development for admissions to Liberal Arts programs.',
            btnText: 'View Program Details',
        },
    ]

    const questions1 = [
        {
            question:"What is Nexa Career and its mission?",
            answer:" Our mission is to guide students transitioning from high school to bachelor's degrees and graduates seeking job opportunities, facilitating well-informed and strategic career decisions."
        },
        {
            question:"Who can benefit from Nexa Career's services?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question:"How does Nexa Career provide career counseling?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question:"Are the counseling sessions confidential?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
    ]

    const questions2 = [
        {
            question:"How can I schedule a counseling session with Nexa Career?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question:"What types of resources does Nexa Career offer?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question:"Is there a fee for Nexa Career's services?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
        {
            question:"How does Nexa Career provide career counseling?",
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at, vero possimus doloribus ullam animi accusamus illum voluptatem repellat saepe"
        },
    ]

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
                        <div className="home-hero-left">
                            <div className="home-hero-subHeading">Innovative Features & Support</div>
                            <div className="home-hero-heading">Achieving
                                <span>Tangible </span>
                                Outcomes For Each Student In Every
                                <span> Classroom</span>
                            </div>
                            <div className="home-hero-text">Elevating the educational experience for every student across every classroom, our commitment lies in delivering results that foster real growth and achievement.</div>
                            <div className="home-hero-btns">
                                <Btn
                                    label='Generate AI Tutoring'
                                    onClick={() => navigate('/Form')}
                                />
                                <Btn
                                    label='Contact Us'
                                    onClick={() => navigate('/ContactUs')}
                                    style={{ color: 'black', background: 'transparent', fontFamily: 'Poppins-Bold' }}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="home-hero-right">
                            <img src={heroImg} alt="hero-img" />
                        </div>
                    </Grid>
                </Grid>
                {/* statatics */}
                <div className='home-stats padding-x'>
                    <Grid container spacing={5}>
                        {statsData.map((stat, index) => (
                            <Grid item sm={3} xs={12} key={index}>
                                <div className="home-stat-card">
                                    <img src={stat.icon} alt="icon" />
                                    <div className='home-stat-card-right'>
                                        <div className="home-stat-figure">{stat.figures}</div>
                                        <div className="home-stat-title">{stat.title}</div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding home-sec2">
                <div className="heading1 text-center">Shaping the Career <span>Guidance</span> Landscape</div>
                <div className="subHeading1 text-center mb-70">Comprehensive career guidance solutions for students, parents, educators and schools</div>
                <Grid container spacing={5}>
                    {data1.map((item, index) => (
                        <Grid item sm={4} xs={12} key={index}>
                            <div className="text-center home-sec2-card">
                                <img className='home-sec2-icon' src={item?.icon} alt="icon" />
                                <div className='subHeading1 text-center'>
                                    {item?.text}
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </section>
            {/* section 3   */}
            <section className="padding home-sec3">
                <div className="heading1 text-center">Paving a path for   <span>brighter</span> future</div>
                <div className="subHeading1 text-center mb-70">Comprehensive career guidance solutions for students, parents, educators and schools</div>
                <Grid container spacing={5}>
                    {data2.map((item, index) => (
                        <Grid item md={3} sm={6} xs={12} key={index}>
                            <div className=" home-sec3-card"
                            onClick={()=>navigate(item?.to)}
                            >
                                <img className='home-sec3-icon' src={item?.icon} alt="icon" />
                                <div className="home-sec3-heading">{item?.title}</div>
                                <div className="home-sec3-text">{item?.text}</div>
                                <div className="home-sec3-btnText">{item?.btnText} &nbsp; <ArrowForwardIosIcon fontSize='small' sx={{ fontSize: '14px' }} /> </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </section>
            {/* section 4  */}
            <section className="home-sec4">
                <div className="home-sec4-upperDiv">
                    <div className="heading1 text-center" style={{ color: 'white' }}>Our Program</div>
                    <div className="subHeading1 text-center mb-40" style={{ color: 'white' }}>Personalized, expert services & support for all stakeholders in the career guidance process.</div>
                    <div className="home-sec4-tabs">
                        <Grid container spacing={5}>
                            {data3.map((item, index) => (
                                <Grid item sm={4} xs={12} key={index}>
                                    <div className={activeTab === item?.title ? 'home-sec4-tab active-home-sec4-tab' : 'home-sec4-tab'} onClick={() => setActiveTab(item?.title)}>
                                        <img className='home-sec3-icon' src={item?.icon} alt="icon" />
                                        <div className="home-sec3-heading">{item?.title}</div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
                <div className="home-sec4-lowerDiv">
                    <Grid container spacing={5}>
                        {data4.map((item, index) => (
                            <Grid item sm={4} xs={12} key={index}>
                                <div className="home-sec4-card">
                                    <div className="home-sec4-card-title1" style={{ color: item?.title1 === '.' ? 'white' : '#484848' }} >{item?.title1}</div>
                                    <div className="home-sec4-card-title2">{item?.title2}</div>
                                    <div className="home-sec4-card-title3">{item?.title3}</div>
                                    <div className="home-sec4-card-text">{item?.text}</div>
                                    <div className="home-sec4-card-btnText">{item?.btnText}</div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </section>
            {/* section 5  */}
            <div className="padding home-sec5">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="home-sec5-left">
                            <div className="heading1 heading1-home" ><span>Expert</span> Career Guidance,
                                <span> Better </span> College Prospects</div>
                            <div className="subHeading1">A Career Counselling Platform to help you
                                navigate your career path with the help of our
                                Expert certified Counselors</div>
                            <Btn
                                label='Chat With Nexa'
                                onClick={()=>navigate('/AIBot')}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="home-sec5-right">
                            <img src={homeImg1} alt="img" />
                        </div>
                    </Grid>
                </Grid>
            </div>
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
                                label='Chat With Nexa'
                                onClick={()=>navigate('/AIBot')}
                            />
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 7  */}
            <section className="padding">
                <div className="home-sec7-bar"/>
                <div className="heading1 heading1-home text-center" >Revolutionizing For <span>Career</span> Future</div>
                <div className="subHeading1 text-center">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning. </div>
                <div className='home-sec7-questionsBox'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                           {questions1.map((item,index) => (
                                <QuestionAnswer
                                key={index}
                                question={item?.question}
                                answer={item?.answer}
                                />
                           ))}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                           {questions2.map((item, index )=> (
                                <QuestionAnswer
                                key={index}
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
                        style={{background:'#FFA63D'}}
                        onClick={()=>navigate('/ContactUs')}
                    />
                    <Btn
                        label='Chat with Nexa'
                        onClick={()=>navigate('/AIBot')}
                    />
                    <img src={arrowImg} className='home-arrowImg' alt="img" />
                </div>
            </section>
            {/* footer  */}
            <Footer />

        </div>
    )
}
