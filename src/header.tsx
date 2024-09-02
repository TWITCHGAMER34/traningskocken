import "./App.css"

export default function Header() {
    return (
        <header>
            <div className="Nav">
                <div className="circle"></div>
                <div className="navbar">
                    <button>MENY</button>
                    <button>MEDLEM</button>
                    <button>RESTURANGER</button>
                </div>
                <div className="navright">
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                    <button><i className="fa fa-user" aria-hidden="true"></i></button>
                </div>
            </div>
            <hr/>
        </header>
    )
}