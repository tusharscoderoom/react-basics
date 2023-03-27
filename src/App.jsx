import Heading from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Contact from './components/Contact';
import contacts from './raw_data/contacts';
import notes from './raw_data/notes';
import Emoji from './components/Emoji';
import { Title } from './components/About';
import emojis from './raw_data/emojis';
import Login from './components/Login';

function renderLogin(notes) {
    return (
        <Note 
            // this 'key' is to identify each item separatly and not a part of props
            key={notes.id}
            title={notes.title}
            content={notes.content}
        />
    );
}

function createContact(contacts) {
    return (
        <Contact 
            key={contacts.id}
            name={contacts.name}
            about={contacts.about}
            tele={contacts.tele}
            email={contacts.email}
        />
    );
}

function aboutEmoji(emojis) {
    return (
        <Emoji 
            key={emojis.id}
            icon={emojis.icon}
            title={emojis.title}
            desc={emojis.desc}
        />
    );
}

export default function App() {
    return <div>
        <Heading />

        <Title title="Notes" />
        {notes.map(note => 
                <Note 
                    key={note.id}
                    title={note.title}
                    content={note.content}
                />
            )
        }
        
        <Title title="Contacts" />
        {contacts.map(createContact)}
        
        <Title title="Emojis" />
        {emojis.map(aboutEmoji)}

        <Title title="Login Form" />
        <div className="form-container">
            <Login isLogin={true} username="You"/>
        </div>

        <Footer />
    </div>;
}