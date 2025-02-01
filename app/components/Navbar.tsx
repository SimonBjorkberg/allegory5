'use client'

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrollPosition > 40 ? "scrolled" : ""}`}>
            <div>
                <h1>Allegory Of The Rave</h1>
            </div>
        </nav>
    );
}
