import {Helmet} from 'react-helmet';
import "./menu.scss";

export default function Menu(){
    return(
        <>
        <Helmet>MENY</Helmet>
    
        <div className='training_selection'>
            <p>Välj den meny som passar din träning</p>
            <button>Styrke Träning</button>
            <button>Konditions Träning</button>
            <button>HIT</button>

        </div>
    </>
    )

}