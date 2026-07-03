import React, {useState, useEffect} from 'react';
import { PostIt } from './PostIt';
import { PostItForm } from './PostItForm';

export function PostItList(){
  const [notas, setNotas] = useState([]);

  useEffect(()=>{
    const raw = localStorage.getItem('postits');
    if(raw){
      try{
        setNotas(JSON.parse(raw));
      }catch(e){}
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('postits', JSON.stringify(notas));
  },[notas]);

  const agregarNota = (nota) =>{
    setNotas(prev => [nota, ...prev]);
  }

  const eliminarNota = (id) =>{
    setNotas(prev => prev.filter(n => n.id !== id));
  }

  return (
    <div className="container">
      <h1 className="mb-4 app-title">Post It Simulator!</h1>
      <PostItForm onAdd={agregarNota} />

      <div className="row notes-row">
        {notas.length === 0 && <div className="text-white">No hay notas aún. Agrega una.</div>}
        {notas.map((nota)=> (
          <div className="col-12 col-md-6 col-lg-3 mb-3" key={nota.id}>
            <PostIt note={nota} onDelete={eliminarNota} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostItList;
