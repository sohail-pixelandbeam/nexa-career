import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Form from '../pages/form/Form';
import SignIn from '../pages/signIn/SignIn';
import AIBot from '../pages/aiBot/AIBot';
import SignUp from '../pages/signUp/SignUp';


export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/SignIn' element={<SignIn />}></Route>
                    <Route path='/SignUp' element={<SignUp />}></Route>
                    <Route path='/Form' element={<Form />}></Route>
                    <Route path='/AIBot' element={<AIBot />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}