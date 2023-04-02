const thisDate = new Date().toLocaleString('en-US', {weekday:'short', month:'short', day:'2-digit'});

function notes(props) {
    return [
        // {
        //     id:0,
        //     title:"",
        //     date: thisDate,
        //     content:""
        // },
        {
            id:props.index,
            title:props.title,
            date: thisDate,
            content:props.content
        }
    ]
}

export default notes;