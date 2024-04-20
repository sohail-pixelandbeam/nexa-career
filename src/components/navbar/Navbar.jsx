import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/logo.png';
import Btn from "../btn/Btn";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Navbar.css';

export default function NavBar({ active, hideModal }) {
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('')
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

    useEffect(() => {
        setActiveLink('')
    }, [hideModal])

    const onCursorEnter = (val) => {
        if (val) setActiveLink(val);
        setMenu(false);
    }




    return (
        <div className="navBar-Parent">
            <div className="navBar-note"
                style={{
                    display: showNote ? 'block' : 'none',
                    // opacity: (activeLink === '') ? 1 : 0.3,
                }}
            >
            
            <div>

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
                                onClick={() => onCursorEnter('Home')}
                            >Home
                            </div>
                            <div
                                className={activeLink === 'AI Bot' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('AI Bot')}
                            >AI Bot
                            </div>
                            <div
                                className={activeLink === 'AI Bot' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('AI Bot')}
                            >Form
                            </div>
                            <div
                                className={activeLink === 'AI Bot' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('AI Bot')}
                            >Career
                            </div>
                            <div
                                className={activeLink === 'AI Bot' ? 'link-nb active' : 'link-nb'}
                                onClick={() => onCursorEnter('AI Bot')}
                            >Contact Us
                            </div>

                        </div>
                    </div>
                </div>
                <div>
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