import React, {useEffect} from 'react';
import Home from "./pages/home/home";
import {Routes, Route, useLocation} from 'react-router-dom';
import AOS from "aos";
import Header from "./components/header/header";
import Footer from "./components/footer";
import {Verification} from "./pages/verification/verification";
import mainbg from './assets/images/mainbg.png';
import mountain from './assets/images/mountain.png';

const App = () => {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);

    const { pathname } = useLocation();

    return (
        <div id='app'
             style={{
                 backgroundImage: pathname === '/' ? `url(${mainbg})` : `url(${mountain})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}
        >
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/ver' element={<Verification/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};

export default App;