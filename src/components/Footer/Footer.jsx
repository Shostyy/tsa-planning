import React, { useEffect, useState } from "react";
import './Footer.scss';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            Tsa Planning &copy; {currentYear}
        </footer>
    );
}