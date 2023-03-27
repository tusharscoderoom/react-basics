import {About} from "./About";

export default function Contact(props) {

    return (
        <div className="contact">
            <img src="https://picsum.photos/50" alt="user"/>
            <div className="contact-detail">
                <h2 className="contact-name">{props.name}</h2>
                <About about={props.about}/>
            </div>
            <p className="contact-tele">+91 {props.tele}</p>
            <About about={props.email}/>
        </div>
    );
}