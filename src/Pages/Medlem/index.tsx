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
            <h2>Prisgrupp 1</h2>
        <ul className='lists'>

            <li>Permanent rabbat på 5%!</li>
            <li>Notifikationer när nya rätter adderas till menyn.</li>
        
         </ul>

         <div className='payment_button'>
            <p>X Kr/Månad</p>
         </div>

        </div>

        <div className='middle_box'>
        <h2>Prisgrupp 2</h2>
        <ul className='lists'>
            <li>Permanent rabbat på 5%!</li>
            <li>Notifikationer när nya rätter adderas till menyn.</li>
            <li>Gratis leverans!</li>

         </ul>

         <div className='payment_button'>
            <p>X Kr/Månad</p>
         </div>

        </div>

        <div className='right_box'>
        <h2>Prisgrupp 3</h2>
        <ul className='lists'>

            <li>Permanent rabbat på 5%!</li>
            <li>Notifikationer när nya rätter adderas till menyn.</li>
            <li>Gratis leverans!</li>
            <li>En professionel kock rekommenderar mat till dig baserat på dina krav.</li>

         </ul>

         <div className='payment_button'>
            <p>X Kr/Månad</p>
         </div>
         
        </div>

        </div>
        <div className='bottom_text'>
        <p>Genom att bli medlem hjälper du oss och gör livet lättare för dig.</p>
        </div>
        </>



    )

        }