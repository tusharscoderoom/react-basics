export default function Button(props) {
    return (
        <button className="login-btn" name={props.btnName} type="submit">{props.btnText}</button>
    )
}