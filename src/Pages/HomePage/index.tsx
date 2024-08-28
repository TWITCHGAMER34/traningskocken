import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import "./HomePage.scss";

export default function Index() {
    return(
        <>
            <Helmet>
                <title>Träningskocken</title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1>Träningskocken</h1>
            </motion.div>
        </>
    )
}