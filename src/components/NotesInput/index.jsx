import React from 'react'

const NotesInput = ({searchNote, setSearchNote, sortOrder, setSortOrder, goToCreatePage, eachFolder}) => {
  return (
      <div className='notes-input'>
            <input
              value={searchNote}
              type='text'
              className="form-control"
              onChange={e => setSearchNote(e.target.value)}
              placeholder='Search notes'
            />
            {/* <select id='sortOrder' value={sortOrder} onChange={handleSortChange}>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </select> */}
            <div className="dropdown">
              <b htmlFor='sortOrder'>Date Sort:</b>&nbsp;
              <button className="btn btn-secondary dropdown-toggle" type="button" id="sortOrderDropdown" data-bs-toggle="dropdown" aria-expanded="false">

                {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortOrderDropdown">
                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('asc')}>Ascending</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('desc')}>Descending</a></li>
              </ul>
          </div>
          {eachFolder &&
              <button className="btn btn-warning" onClick={goToCreatePage}>+ Create a new note</button>}
          </div>
  )
}

export default NotesInput