import {About} from "./About";

export default function Emoji(props) {
    return (
        <div className="emoji-container">
            <div className="emoji">
                <div className="emoji-card-holder"></div>
                <h1 className="emoji-icon">{props.icon}</h1>
                <div className="emoji-content">
                    <h2 className="emoji-title">{props.title}</h2>
                    <About about={props.desc}/>
                </div>
                {/* <div className="emoji-card-holder"></div> */}
            </div>
        </div>
    );
}