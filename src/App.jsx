import Heading from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import { Title } from './components/About';
import NoteAdder from './components/NoteAdder';
import { useState } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group'; animation related

export default function App() {
    
    const [notes, setNotes] = useState([]);
    // const [anim, setAnim] = useState(true);  animation states

    function fromChild(singleNote) {
        /* 
            push() method changes the original array and creates a whole new
            array after adding new elements, returning the length of the array
            so it was giving error now using the spread operator
            for making shallow copy means same reference after copying
        */
        setNotes( prev => [...prev, singleNote]);
        console.log(notes);
    }

    function deleteNote(id) {
        setNotes( prev => (
            prev.filter( (note, ind) => 
                (ind !== id)
            )
        ))
    }

    // for animation related
    // function animateNote(doAnime) {
    //     setAnim(!doAnime);
    // }

    return <div>
        <Heading />

        <NoteAdder callParent={fromChild}/>

        <Title title="Notes" />
        
        <div className="note-container">
        

        {notes.map( (note, index) => 
                <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    // date={thisDate}
                    content={note.content}
                    deleteReq={deleteNote}
                />
            )
        }

        </div>

        <Footer />
    </div>
}