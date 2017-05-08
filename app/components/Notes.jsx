import React from 'react'

export default (props) =>
  <div>
    <h3>Notes</h3>
    <p>This is a note about something with a plot or idea</p>
    <p>This is another note for a different idea but has to do with this section</p>
    <h4>Add new note:</h4>
    <form>
      <div>
        <label>New note:</label>
        <input type='text' />
      </div>
      <button type='submit' className='btn btn-default'>Add Note</button>
    </form>
  </div>