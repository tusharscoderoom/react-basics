export default function Note(props) {

    return <div className="note">        
        <h1 className="note-title">{props.title}</h1>
        <p className="note-content">{props.content}</p>
    </div>;

}