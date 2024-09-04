import "./App.scss"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            setIsScrollingDown(currentScrollPosition > scrollPosition);
            setScrollPosition(currentScrollPosition);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <header className={isScrollingDown ? "hidden" : ""}>
            <div className="Nav">
                <div className="circle">
                    <img src="../public/LOGO-removebg.png" alt=""/>
                </div>
                <div className="navbar">
                    <Link to="/">HEM</Link>
                    <Link to="/meny">MENY</Link>
                    <Link to="/blimedlem">MEDLEM</Link>
                    <Link to="/resturanger">RESTURANGER</Link>
                </div>
                <div className="navright">
                    <Link to={"#"}><i className="fa fa-search" aria-hidden="true"></i></Link>
                    <Link to={"/login"}><i className="fa fa-user" aria-hidden="true"></i></Link>
                </div>
            </div>
            <hr/>
        </header>
    );
}