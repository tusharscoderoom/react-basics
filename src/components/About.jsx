function About(props) {
    return (<p className="about">{props.about}</p>);
}

function Title(props) {
    return <h2 style={{marginLeft: '25px', marginTop: '25px'}}>{props.title}</h2>
}

// function Input() {
    
// }

export {About, Title};