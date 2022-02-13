import React from 'react';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import { INote } from '../interfaces';

interface NotesProps {
  notes: INote[]
  onRemove(id: number | string): void
}

const Notes: React.FC<NotesProps> = ({notes, onRemove}) => {
  return (
    <TransitionGroup component={'ul'} className='list-group'>
      {notes.map(note => (
        <CSSTransition
          key={note.id}
          classNames={'note'}
          timeout={800}
        >
          <li
            className='list-group-item note'
          >
            <div>
              <strong>{note.title}</strong>

              <small>{note.date}</small>
            </div>

            <button className="btn btn-outline-danger btn-sm " onClick={() => onRemove(note.id)}>&times;</button>
          </li>
        </CSSTransition>
      )
      )}
    </TransitionGroup>
  )
}

export default Notes;
