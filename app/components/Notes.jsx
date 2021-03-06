import React from 'react'

export default (props) =>
  <div className="panel panel-danger">
    <div className="panel-heading">
      <h3>Notes</h3>
    </div>
    <div className="panel-body">
      {
        props.item
          ? <textarea
            rows={4}
            cols={40}
            value={props.item.notes}
          />
          : <textarea
            rows={4}
            cols={40}
          />
      }

    </div>
  </div>
