import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/SidePanel/SidePanel.css'

//Implement useState and useTransition to make our own transition

interface props {
    isActive : boolean,
    toggle : () => void
}

function SidePanel({isActive, toggle}:props) {

    return(
        <>
                <div className={isActive ? 'PanelFrame Panel' : 'PanelFrame Panel collapsed'} id='Panel'>
                    <div className='cart card-body' style={{width:'13vw'}}>
                        <button className="btn btn-primary CollapseButton" type="button" onClick={toggle}>O</button>
                    </div>
                    <h1></h1>

                </div>
            
        </>
    );

}

export default SidePanel;