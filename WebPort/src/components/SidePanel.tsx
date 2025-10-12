import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../componentStyle/SideBar.css'


function SidePanel() {
    
    return(
        <>
        <div>
            <button className="btn btn-primary show CollapseButton1" type="button" data-bs-toggle="collapse" 
            data-bs-target="#Panel" aria-expanded="true" aria-controls="Panel">
                &gt;&gt;
            </button>

            <div className='PanelContainer'>
                <div className='PanelFrame collapse show collapse-horizontal Panel' id='Panel'>

                    <div className='cart card-body' style={{width:'13vw'}}>
                        <button className="btn btn-primary show CollapseButton" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#Panel" aria-expanded="true" aria-controls="Panel">
                            &lt;&lt;
                        </button>
                    </div>
                    <h1></h1>

                </div>
            </div>
            
        </div>
        </>
    );

}

export default SidePanel;