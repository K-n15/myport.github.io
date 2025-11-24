import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/TopNav/TopNav.css'

function searchBar(){
    return (
        <>
        <div className="btn-group">
            <button type="button" id='drop' className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Category Selection
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div>
        </>
    );
}

function TopNav(props : any) {
    const isPort = props.type == "port";
    return (
        <>
            <nav className="navbar bg-body-tertiary " id='border'>
                <div className="container-fluid box">
                    <a className="navbar-brand" id='logo' href="#">
                    <img src="#" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
                    </a>
                    {searchBar()}
                    <h3 id='title'>{ props.title }</h3>
                </div>
            </nav>
        </>
    );
}



export default TopNav;