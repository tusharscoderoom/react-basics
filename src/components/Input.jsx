export default function Input(props) {
    return (
        <input className="input-field" type={props.type} name={props.name} placeholder={props.placeholder} />
    );
}