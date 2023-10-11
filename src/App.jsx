import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { SidebarProvider } from "./components/contexts/SidebarProvider";
//events

import './styles/general.scss';


function App() {
    return (
        <>
            <SidebarProvider>
                <Router>
                <Header />
                    <LoginPopup />
                        <Main />
                    <Footer />
                </Router>
            </SidebarProvider>
        </>
    )
}

export default App;