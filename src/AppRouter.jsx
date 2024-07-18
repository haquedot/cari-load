// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Contact from './pages/Contact';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import Signin from './pages/Signin';
// import BookingForm from './pages/BookingForm';
// import NotFound from './pages/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                
                <Route path="/cari-load" element={<Home />} />
                <Route path="/cari-load/about" element={<About />} />
                <Route path="/cari-load/contact" element={<Contact />} />
                <Route path="/cari-load/signin" element={<SignIn/>} />
                <Route path="/cari-load/signup" element={<SignUp/>} />

                {/* <Route path="/book" element={<BookingForm />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
