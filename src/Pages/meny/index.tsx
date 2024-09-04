import {Helmet} from 'react-helmet';
import "./menu.scss";

export default function Menu(){
    return(
        <>
        <Helmet>MENY</Helmet>
    
            
        <div class="container">

             <div class="Buttons">
                <button>Styrke Träning</button>
                <button>Konditions Träning</button>
                <button>HTI</button>
            </div>


            <div class="item_1"> 
                <img src="burger.jpeg" width="300" height="300"></img> 
                <h2>Mat Namn</h2>
                <p>Pris: x Kr</p>
                <p>Kalorier: x</p>
                

            </div>

            <div class="item_2"> <img src="burger.jpeg" width="300" height="300"></img> </div>

            <div class="item_3"> <img src="burger.jpeg" width="300" height="300"></img> </div>

            <div class="item_4"> <img src="burger.jpeg" width="300" height="300"></img> </div>

            <div class="item_5"> <img src="burger.jpeg" width="300" height="300"></img> </div>

            <div class="item_6"> <img src="burger.jpeg" width="300" height="300"></img> </div>
        </div>
    </>
    )

}