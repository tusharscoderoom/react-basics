export default function Note(props) {
    const thisDate = new Date().toLocaleString('en-US', {weekday:'short', month:'short', day:'2-digit'});
    return (
        <div className="note">        
            <h1 className="note-title">{props.title}</h1>
            <p className="note-date">{thisDate}</p>
            <p className="note-content">{props.content}</p>
            {/* <button className="note-btn">Delete</button> */}
            <button 
                className="note-btn"
                onClick={() => { props.deleteReq(props.id) } }
            >❌</button>
        </div>        
    );

}