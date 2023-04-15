import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import { useState } from "react";
import { Fab, Zoom } from '@mui/material';

export default function NoteAdder(props) {
    
    const [note, setNote] = useState({
        anim: true,
        title: '',
        content: ''
    });
    const [showTextArea, setShowTextArea] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote( prev => (
            {...prev, [name]: value}
        ))
    }

    function inputClick() {
        // console.log('show text');
        setShowTextArea(true);
    }

    function handleClick() {
        // console.log(note);
        setNote(prev => {
            if(prev.title !== '' && prev.content !== '')
                return {...prev, title: '', content: ''}
            else
                return prev
        })
    }
    return (
        <Zoom in = {true}>
            <div className="add-note-container">
                <form className="add-note" method="post" action="">
                    <input
                        name="title"
                        className="note-title"
                        placeholder="Note Title"
                        onChange={handleChange}
                        value={note.title}
                        onClick={inputClick}
                    />
                    <hr/>
                    <textarea 
                        style={{display:showTextArea?'block':'none'}}
                        name="content"
                        className="note-content" 
                        placeholder="Note Material"
                        onChange={handleChange}
                        value={note.content}
                    ></textarea>
                    <Fab 
                        style={{display:showTextArea?'block':'none'}}
                        className="add-note-btn"
                        onClick={ (e) => {
                            e.preventDefault();
                            handleClick();
                            return props.callParent(note);
                        }}
                    >                
                        <DoneAllRoundedIcon />
                    </Fab>
                </form>
            </div>
        </Zoom>
    );
}