import React from 'react';

export function PostIt({ note, onDelete }){
  const clases = note.importante ? 'postit-card importante' : 'postit-card';
  return (
    <div className={clases}>
      <button className="postit-delete" aria-label="Eliminar nota" onClick={() => onDelete(note.id)}>X</button>
      {note.titulo && <div className="postit-title">{note.titulo}</div>}
      <div className="postit-desc">{note.descripcion}</div>
    </div>
  )
}

export default PostIt;
