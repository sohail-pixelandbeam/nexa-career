import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Form from '../pages/form/Form';
import SignIn from '../pages/signIn/SignIn';


export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/SignIn' element={<SignIn />}></Route>
                    <Route path='/Form' element={<Form />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}