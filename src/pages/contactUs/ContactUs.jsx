import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/Navbar';
import './ContactUs.css'
import Btn from '../../components/btn/Btn';
import Footer from '../../components/footer/Footer';
import InputField from '../../components/inputField/InputField';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import Snack from '../../components/snack/Snack';


export default function ContactUs() {
    const navigate = useNavigate();
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


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <NavBar />
           
            <section className="padding"/>

            {/* footer  */}
            <Footer />
            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </div>
    )
}
