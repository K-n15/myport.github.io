import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/ContentBox/ContentBox.css';

function Contents(props : any){
    return (
        <>
            <div className="Edges">
                <img className='preview' src={props.img} ></img>
                <div className='header'>
                    <h4>{props.heads}</h4>
                </div>
                <div className='description'>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}

export default Contents;