import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import "./medlem.scss";

export default function bliMedlem() {
    return(
        <>
        <Helmet>Bli Medlem</Helmet>
        
        <h1>Bli Medlem</h1>

        <div className='log_in'>
            <p>Logga in</p>
        </div>


        <div className='all_options'>

        <div className='left_box'>
            <h2>Prisgrup 1</h2>
        <ul className='lists'>

            <li>Permanent rabbat på 5%!</li>
            <li>Notifikationer när nya rätter adderas till menyn.</li>
        
         </ul>
        </div>

        <div className='middle_box'>
        <h2>Prisgrup 2</h2>
        <ul className='lists'>
            <li>Permanent rabbat på 5%!</li>
            <li>Notifikationer när nya rätter adderas till menyn.</li>
            <li>Gratis leverans!</li>

         </ul>
        </div>

        <div className='right_box'>
        <h2>Prisgrup 3</h2>
        <ul className='lists'>

            <li>Permanent rabbat på 5%!</li>
            <li>Notifikationer när nya rätter adderas till menyn.</li>
            <li>Gratis leverans!</li>
            <li>En professionel kock rekommenderar mat till dig baserat på dina krav.</li>

         </ul>
        </div>

        </div>

        <p>Genom att bli medlem hjälper du oss och gör livet lättare för dig.</p>
        </>



    )

        }