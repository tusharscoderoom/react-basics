import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Zoom } from '@mui/material';

export default function Note(props) {
    const thisDate = new Date().toLocaleString('en-US', {weekday:'short', month:'short', day:'2-digit'});

    // function toAnimate() {
    //     console.log('called');
    //     return false;
    // }

    return (
        <Zoom in={props.anim} timeout={300} >
            <div className="note">        
                <h1 className="note-title">{props.title}</h1>
                <p className="note-date">{thisDate}</p>
                <p className="note-content">{props.content}</p>
                {/* <button className="note-btn">Delete</button> */}
                <button 
                    className="note-btn"
                    onClick={() => { 
                        // console.log(props.anim);
                        props.deleteReq(props.id, false) 
                    } }
                >
                    <DeleteTwoToneIcon />
                </button>
            </div>
        </Zoom>
    );
}