import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/ContentBox/ContentBox.css';

interface props {
    img : string,
    heads : string,
    description : string,
    isActive : boolean
}

function Contents({img, heads, description, isActive}:props){
    return (
        <>
            <div className={isActive ? "Edges" : "Edges Spacing"}>
                <img className='preview' src={img} ></img>
                <div className='header'>
                    <h4>{heads}</h4>
                </div>
                <div className='description'>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default Contents;