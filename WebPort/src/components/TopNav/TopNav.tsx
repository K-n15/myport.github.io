import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/TopNav/TopNav.css'
import myLogo from '../Logo.png';

interface props {
    title : string,
    type : string,
    isActive : boolean,
    filter : string,
    setfilter : React.Dispatch<React.SetStateAction<string>>
}

interface subprops {
    filter : string,
    setfilter : React.Dispatch<React.SetStateAction<string>>
}

function searchBar({filter, setfilter}:subprops){

    return (
        <>
        <div className="btn-group">
            <button type="button" id='drop' className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {filter}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={()=>setfilter('Language')}>Language</a></li>
                <li><a className="dropdown-item" href="#" onClick={()=>setfilter('Project')}>Project</a></li>
                <li><a className="dropdown-item" href="#" onClick={()=>setfilter('Experimentation')}>Experimentation</a></li>
                <li><a className="dropdown-item" href="#" onClick={()=>setfilter('Category Selection')}>Cancel</a></li>
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

function TopNav({title, type, isActive, filter, setfilter}:props) {

    let content = (<></>);

    switch (type){
        case 'Portfolio':
            content = searchBar({filter, setfilter});
            break;
        case 'Resume':
            content = download();
            break;
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary " id='border'>
                <div className="container-fluid box">
                    <a className={isActive ? "navbar-brand normal" : 'navbar-brand Shift'} id='logo' href="#">
                    <img src={myLogo} alt="Logo" className='Logo'></img>
                    </a>
                    {content}
                    <h3 id='title'>{ title }</h3>
                </div>
            </nav>
        </>
    );
}



export default TopNav;