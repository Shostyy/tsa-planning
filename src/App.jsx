import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import { LoginPopup } from "./components/LoginPopup";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { SidebarProvider } from "./components/SidebarProvider";

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