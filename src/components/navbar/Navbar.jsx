import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/logo.png';
import Btn from "../btn/Btn";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import message from '../../assets/img/message.png';
import location from '../../assets/img/location.png';
import facebook from '../../assets/img/facebook.png';
import linkedin from '../../assets/img/linkedin.png';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import accountIcon from '../../assets/img/accountIcon.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Navbar.css';
import { Link } from "react-scroll";

export default function NavBar({ active }) {
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('Home')
    let [showNote, setShowNote] = useState(true);
    let [showSignOut, setShowSignOut] = useState(false);
    let [isMobile, setIsMobile] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        if(active) setActiveLink(active);
        // Retrieve user data from local storage
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setIsUserLoggedIn(true);
        }
    }, []);


    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 800);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setShowNote(currentScroll <= 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        (menu === false) ? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    }, [menu])

    const handleNavigation = (name, path) => {
        setMenu(false);
        setActiveLink(name);
        if(path){
            navigate(path)
        }
    }

    const handleLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem('userData');
        // Redirect to the sign-in page
        navigate('/signin');
    };


    return (
        <div className="navBar-Parent">
            <div
                style={{ display: 'none' }}
            // style={{ display: showNote ? 'block' : 'none' }}
            >
                <div className="navBar-note">
                    <div className="navBar-note-left">
                        <div className="navBar-note-left-item">
                            <img src={message} alt="img" width={16} />
                            <div>info@example.com</div>
                        </div>
                        <div className="navBar-note-left-item">
                            <img src={location} alt="img" width={12} />
                            <div>info@example.com</div>
                        </div>
                    </div>
                    <div className="navBar-note-right">
                        <img src={facebook} alt="icon" width={10} />
                        <img src={instagram} alt="icon" width={14} />
                        <img src={twitter} alt="icon" width={15} />
                        <img src={linkedin} alt="icon" width={14} />
                    </div>

                </div>
            </div>
            <div className="navBar">
                <div className="icon">
                    {(menu === false) ? <MenuIcon onClick={() => setMenu(!menu)} /> : <CloseIcon onClick={() => setMenu(!menu)} />}
                </div>
                <div>
                    <img onClick={() => navigate('/')} src={logo} className="logo-nb" />
                </div>
                <div className="nb-links-box-dummy">
                    <div className={activeMenu}>
                        {active !== 'SignUp' && <div className="navLinks-box">
                            {isMobile && <div
                                className="link-nb2"
                                onClick={() => setMenu(false)}
                            >Close
                            </div>}
                            <div
                                className={activeLink === 'Home' ? 'link-nb active' : 'link-nb'}
                                onClick={() => handleNavigation('Home', '/')}
                            >Home
                            </div>
                            <div
                                className={activeLink === 'AI Bot' ? 'link-nb active' : 'link-nb'}
                                onClick={() => handleNavigation('AI Bot', '/AIBot')}
                            >AI Bot
                            </div>
                            <div
                                className={activeLink === 'Form' ? 'link-nb active' : 'link-nb'}
                                onClick={() => handleNavigation('Form', '/Form')}
                            >Form
                            </div>
                            <div
                                // className={activeLink === 'Resume Builder' ? 'link-nb active' : 'link-nb'}
                                onClick={() => handleNavigation('Resume Builder')}
                            >
                                <a 
                                className={activeLink === 'Resume Builder' ? 'link-nb active' : 'link-nb'}
                                href='https://nexa-career-resume-builder.vercel.app' target='_blank' >Resume Builder</a>
                            </div>
                            <div
                                className={activeLink === 'Contact Us' ? 'link-nb active' : 'link-nb'}
                                onClick={() => handleNavigation('Contact Us', '/ContactUs')}
                            >
                                    Contact Us                               
                            </div>

                        </div>}
                    </div>
                </div>
                <div className="nav-getStarted-btn">
                    {isUserLoggedIn ? <div className="nav-account-box" onMouseEnter={() => setShowSignOut(true)} >
                        <img src={accountIcon} alt="img" />
                        <div >{userData?.name}
                            <ArrowDropDownIcon/>
                        </div>
                        {showSignOut && <div className="signOutBox"
                        onMouseLeave={() => setShowSignOut(false)}
                        onClick={handleLogout}
                        >
                            Sign Out
                            </div>}
                        
                    </div> : <Btn
                        label="Get Started "
                        onClick={() => {
                            handleNavigation('SignUp', '/SignUp');
                        }}
                    />}

                </div>
            </div>
        </div >
    )
} 