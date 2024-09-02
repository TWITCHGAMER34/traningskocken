import {Helmet} from 'react-helmet';
import "./medlem.scss";
import {Option} from "./option.tsx";

export default function bliMedlem() {
    return (
        <>
            <Helmet>Bli Medlem</Helmet>

            <h1>Bli Medlem</h1>
            <div className='all_options'>
                <Option title={"Prisgrupp 1"} items={["Permanent rabatt på 5%!", "Notifikationer när nya rätter adderas till menyn."]} price={"X"}/>
                <Option title={"Prisgrupp 2"} items={["Permanent rabatt på 5%!", "Notifikationer när nya rätter adderas till menyn.", "Gratis leverans!"]} price={"X"}/>
                <Option title={"Prisgrupp 3"} items={["Permanent rabatt på 5%!", "Notifikationer när nya rätter adderas till menyn.", "Gratis leverans!", "En professionel kock rekommenderar mat till dig baserat på dina krav."]} price={"X"}/>
            </div>
            <div className='bottom_text'>
                <p>Genom att bli medlem hjälper du oss och gör livet lättare för dig.</p>
            </div>
        </>
    )
}
