import {Helmet} from 'react-helmet';
import "./menu.scss";

export default function Menu(){
    return(
        <>
        <Helmet>MENY</Helmet>
        
    
            
        <div className="container">

             <div className="Buttons">
                <button>Styrke Träning</button>
                <button>Konditions Träning</button>
                <button>HTI</button>
            </div>


            <div className="item_1"> 
                <img src="burger.jpeg" width="300" height="300"></img> 
                <h2>Mat Namn</h2>

            </div>

            <div className="item_2"> <img src="burger.jpeg" width="300" height="300"></img>
            <h2>Mat Namn</h2>

             </div>

            <div className="item_3"> <img src="burger.jpeg" width="300" height="300"></img>
            <h2>Mat Namn</h2>

             </div>

            <div className="item_4"> <img src="burger.jpeg" width="300" height="300"></img>
            <h2>Mat Namn</h2>

             </div>

            <div className="item_5"> <img src="burger.jpeg" width="300" height="300"></img>
            <h2>Mat Namn</h2>

             </div>

            <div className="item_6"> <img src="burger.jpeg" width="300" height="300"></img>
            <h2>Mat Namn</h2>

             </div>
        </div>
    </>
    )

}