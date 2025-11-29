import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/TopNav/TopNav.css'
import myLogo from '../Logo.png';

function searchBar(){
    return (
        <>
        <div className="btn-group">
            <button type="button" id='drop' className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Category Selection
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Language</a></li>
                <li><a className="dropdown-item" href="#">Project</a></li>
                <li><a className="dropdown-item" href="#">Experimentation</a></li>
                <li><a className="dropdown-item" href="#">close</a></li>
            </ul>
        </div>
        </>
    );
}

function download(){
    //Use to download the resume
    return (
        <></>
    );
}

function TopNav(props : any) {

    let content = (<></>);

    switch (props.types){
        case 'Portfolio':
            content = searchBar();
            break;
        case 'Resume':
            content = download();
            break;
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary " id='border'>
                <div className="container-fluid box">
                    <a className="navbar-brand" id='logo' href="#">
                    <img src={myLogo} alt="Logo" className='Logo'></img>
                    </a>
                    {content}
                    <h3 id='title'>{ props.title }</h3>
                </div>
            </nav>
        </>
    );
}



export default TopNav;