import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../componentStyle/SideBar.css'


<button className="btn btn-primary" type="button" data-bs-toggle="collapse" 
data-bs-target="#sidebar" aria-expanded="false" aria-controls="sidebar">
    Toggle width collapse
</button>
{/* <nav className="navbar bg-body-tertiary collapse collapse-horizontal" id="collapseWidthExample" 
style={{
    minHeight:'100%',
    maxWidth:'13em',
    padding:'0'
}}>
    <div className="container-fluid card card-body" 
    style={{
        width:'20%',
    }}>
        <a className="navbar-brand" href="#">Navbar</a>
    </div>
</nav> */}
<div className="navbar" style={{minHeight:'100%'}}>
    <div className="collapse collapse-horizontal" id="sidebar">
        <div className="card card-body" 
        style={{
            width: '13em',
            maxWidth:'13em',
            minHeight: '100%',
            }}>
        This is some placeholder content for a horizontal collapse. It’s hidden by default and shown when triggered.
        </div>
    </div>
</div>

function SidePanel() {
    
    return(
        <>
        <button className="btn btn-primary show CollapseButton1" type="button" data-bs-toggle="collapse" 
        data-bs-target="#Panel" aria-expanded="true" aria-controls="Panel">
            &lt;&lt;
        </button>
        <div className='PanelContainer'>
            <div className='PanelFrame collapse show collapse-horizontal Panel' id='Panel'>
                <div className='cart card-body' style={{width:'13vw'}}>

                </div>
            </div>
            <button className="btn btn-primary show CollapseButton" type="button" data-bs-toggle="collapse" 
            data-bs-target="#Panel" aria-expanded="true" aria-controls="Panel">
                &gt;&gt;
            </button>
        </div>
        </>
    );

}

export default SidePanel;