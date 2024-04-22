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

import './Navbar.css';

export default function NavBar({ active, hideModal }) {
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('Home')
    let [showNote, setShowNote] = useState(true);

    let [isMobile, setIsMobile] = useState(false);

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

    const onCursorEnter = (val) => {
        if (val) setActiveLink(val);
        navigate(`/${val}`)
        setMenu(false);
    }





    return (
        <div className="navBar-Parent">
            <div
            style={{display:'none'}}
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
                        <div className="navLinks-box">
                            {isMobile && <div
                                className="link-nb2"
                                onClick={() => setMenu(false)}
                            >Close
                            </div>}
                            <div
                                className={activeLink === 'Home' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('')}
                            >Home
                            </div>
                            <div
                                className={activeLink === 'AI Bot' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('')}
                            >AI Bot
                            </div>
                            <div
                                className={activeLink === 'Form' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('Form')}
                            >Form
                            </div>
                            <div
                                className={activeLink === 'Career' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('')}
                            >Career
                            </div>
                            <div
                                className={activeLink === 'Contact Us' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('')}
                            >Contact Us
                            </div>

                        </div>
                    </div>
                </div>
                <div className="nav-getStarted-btn">
                    <Btn
                        label="Get Started "
                        onClick={() => {
                            navigate('/')
                        }}
                    />
                </div>
            </div>
        </div >
    )
} 