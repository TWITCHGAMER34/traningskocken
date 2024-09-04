import './profileStyles.scss';
import {useState} from 'react';

export default function Profile() {
    const [name] = useState(localStorage.getItem('name') ||"");
    const [email, setEmail] = useState(localStorage.getItem('email') ||"");

    console.log(localStorage.getItem('name'))

    return (
        <div className="profile-container">
            <h1>Välkommen {name}!</h1>
            <div className="boxes">
                <div className="pbox">
                    <h2>Inställningar</h2>
                    <h3>Ändra träningsupplägg</h3>
                    <select name="trainings" id="trainings">
                        <option value="HIT">HIT</option>
                        <option value="Kondition">Kondition</option>
                        <option value="Styrketräning">Styrketräning</option>
                    </select>
                    <button>Ändra</button>
                    <hr/>
                    <div className={"mt-auto flex-col"}>
                        <h3>Avsluta prenumeration</h3>
                        <button className="danger">Avsluta</button>
                    </div>
                </div>
                <div className="pbox">
                    <h2>Ditt Medlemsskap</h2>
                    <div className="val">
                        <h3>Prisgrupp 2</h3>
                        <ul>
                            <li>Rabatt 10%</li>
                            <li>Notiser</li>
                            <li>Gratis leverans</li>
                        </ul>
                        <p className={"right-bottom"}>pris: x kr</p>
                    </div>
                    <select name="membership" id="membership">
                        <option value="Prisgrupp 1">Prisgrupp 1</option>
                        <option value="Prisgrupp 2">Prisgrupp 2</option>
                        <option value="Prisgrupp 3">Prisgrupp 3</option>
                    </select>
                    <button>Ändra</button>
                </div>
                <div className="pbox">
                    <h2>Dina uppgifter</h2>
                    <label>
                        E-mail:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Telefonnummer:
                        <input type="text" placeholder="0709864189"/>
                    </label>
                    <label>
                        Lösenord:
                        <input type="password" placeholder="**********"/>
                    </label>
                    <button>Ändra</button>
                </div>
            </div>
        </div>
    );
}