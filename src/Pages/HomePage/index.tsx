import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import "./HomePage.scss";
import {Link} from "react-router-dom";

export default function Index() {
    return (
        <>
            <Helmet>
                <title>Hem</title>
            </Helmet>
            <div id="main">
                <div id="hero">
                    <img src="/rest.jpg" alt="hero"/>
                </div>
                <hr/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    id="logo-full"
                >
                    <h1>Träningskocken</h1>
                    <div id="logo-big">
                        <img src="/LOGO-removebg.png" alt="logo-big"/>
                    </div>
                    <h2>EAT, TRAIN, GAIN</h2>
                </motion.div>
                <hr/>
                <h2>MAT ANPASSAD EFTER DIN TRÄNING</h2>
                <Link to="/meny">MENY</Link>
                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <p>"Det bästa jag någonsin käkat" - Zoltan</p>
                <hr/>
            </div>
        </>
    )
}