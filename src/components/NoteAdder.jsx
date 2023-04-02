import { useState } from "react";
// import notes from "../raw_data/notes";

export default function NoteAdder(props) {
    
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    
    function handleChange(event) {
        const {name, value} = event.target;
        setNote( prev => (
            {...prev, [name]: value}
        ))
    }

    function handleClick() {
        // console.log(note);
        setNote({
            title: '',
            content: ''
        })
    }
    return (
        <div className="add-note-container">
            <form className="add-note" method="post" action="">
                <input
                    name="title"
                    className="note-title"
                    placeholder="Note Title"
                    onChange={handleChange}
                    value={note.title}
                />
                <hr/>
                <textarea 
                    name="content"
                    className="note-content" 
                    placeholder="Note Material"
                    onChange={handleChange}
                    value={note.content}
                ></textarea>
                <button 
                    className="add-note-btn"
                    onClick={ (e) => {
                        e.preventDefault();
                        handleClick();
                        return props.callParent(note);
                    }}
                >Add</button>
            </form>
        </div>
    );
}