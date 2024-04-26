import React, { useEffect, useState } from 'react';
import './SignIn.css';
import NavBar from '../../components/navbar/Navbar';
import Btn from '../../components/btn/Btn';
import Footer from '../../components/footer/Footer';
import InputField from '../../components/inputField/InputField';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../config/FirebaseConfig';
import Loader from '../../components/loader/Loader';
import Snack from '../../components/snack/Snack';


export default function SignIn() {
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

    //Firestore handling
    const usersRef = collection(db, "users");
    const [userObj, setUserObj] = useState({ email: "", password: "" });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // const signInUser = () => {
    //     navigate('/')
    // }


    const signInUser = async () => {
        setIsLoading(true);
        const { email, password } = userObj;
        if (email && password) {
            try {
                // Get all documents from the users collection
                const usersCollection = collection(db, 'users');
                const querySnapshot = await getDocs(usersCollection);

                // Check if email and password match any user document
                let userFound = false;
                querySnapshot.forEach(doc => {
                    const userData = doc.data();

                    if (userData.email === email && userData.password === password) {
                        // If email and password match, store user data in local storage
                        localStorage.setItem('userData', JSON.stringify(userData));
                        userFound = true;
                    }
                });

                if (!userFound) {
                    setSnackMsg("Invalid email or password");
                    setSeverity("error");
                    setOpenSnack(true);
                    setIsLoading(false);
                    return; // Terminate the function
                }

                setSnackMsg("Sign-in successful");
                setSeverity("success");
                setOpenSnack(true);
                setIsLoading(false);
                setTimeout(() => {
                    navigate('/');
                }, 1000)

                // You can redirect or navigate to the next page here if needed
            } catch (error) {
                console.error('Error signing in:', error);
                setSnackMsg(error.message || 'Error signing in');
                setSeverity("error");
                setOpenSnack(true);
                setIsLoading(false);
            }
        } else {
            setOpenSnack(true);
            setSnackMsg("Email or password is missing.");
            setIsLoading(false);
        }
    }


    return (
        <div>
            <NavBar />
            <section className='home-hero'>
                {/* main hero  */}
            </section>
            <div className="text-center SignInBox">
                <div className="heading2">Log in to Nexa Career</div>
                <InputField
                    placeholder='Email Address'
                    onChange={(e) => handleVal('email', e.target.value)}
                    style={{ borderBottom: '1px solid lightgray', marginBottom: '20px', marginTop: '40px' }}
                />
                <InputField
                    placeholder='Password'
                    onChange={(e) => handleVal('password', e.target.value)}
                    isPassword={true}
                    style={{ borderBottom: '1px solid lightgray', marginBottom: '20px' }}
                />
                <Btn
                    label='Log In'
                    onClick={signInUser}
                    style={{ width: '100%', marginTop: '50px', background: '#FFA63D' }}

                />
                <div className="signIn-bottom-texts">
                    <div className="signIn-link-text">Forgot Password?</div>

                    <div className="signIn-bottom-text">New to Nexa Career?
                        <div className="signIn-link-text" onClick={() => navigate('/signUp')}>Create Account</div>
                    </div>
                </div>
            </div>
            <section className="padding">

            </section>
            {/* footer  */}
            <Footer />
            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </div>
    )
}
