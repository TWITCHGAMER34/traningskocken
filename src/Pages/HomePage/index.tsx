import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import "./HomePage.scss";

export default function Index() {
    return (
        <>
            <Helmet>
                <title>Hem</title>
            </Helmet>
            <div id="main">
                <div id="hero">
                    <img src="https://placehold.co/1920x500" alt="hero"/>
                </div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <h1>Träningskocken</h1>
                    <h2>hej</h2>
                    <h2>på dig</h2>
                </motion.div>
            </div>
        </>
    )
}