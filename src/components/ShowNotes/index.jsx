import React from 'react'
import { useNavigate } from 'react-router';

const ShowNotes = ({ notes }) => {
const navigate = useNavigate()
    
  const goToNotesPage = (noteId) => {
    navigate('/note/' + noteId);
  };

    const stripHtmlTags = html => {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        const paragraphs = doc.body.getElementsByTagName('p')

        if (paragraphs.length > 0) {
            return paragraphs[0].textContent || ''
        }

        return doc.body.textContent || ''
    }
    return (
        <div className='all-notes'>
            {notes.map(note => (
                <div
                    key={note._id}
                    className='note-card'
                    onClick={() => goToNotesPage(note._id)}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <h2>{note.Name}</h2>
                    <p>{stripHtmlTags(note.Content)}</p>
                    <p>
                        {new Date(note.updatedAt).toLocaleString('en-UK', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ShowNotes
