import React, {useState} from 'react';

export function PostItForm({ onAdd }){
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(descripcion.trim() === ''){
      setError('La descripción es obligatoria');
      return;
    }
    const nueva = {
      id: Date.now().toString() + Math.random().toString(36).slice(2,7),
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      importante
    };
    onAdd(nueva);
    setTitulo('');
    setDescripcion('');
    setImportante(false);
    setError('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2 align-items-center">
        <div className="col-12 col-md-3">
          <input className="form-control" placeholder="Titulo" value={titulo} onChange={e=>setTitulo(e.target.value)} />
        </div>
        <div className="col-12 col-md-5">
          <input className="form-control" placeholder="Descripcion (obligatoria)" value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
        </div>
        <div className="col-6 col-md-1 d-flex align-items-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="importante" checked={importante} onChange={e=>setImportante(e.target.checked)} />
            <label className="form-check-label" htmlFor="importante">Importante</label>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-end">
          <button className="btn btn-dark" type="submit" style={{minWidth:170, background:'#000', borderColor:'#000'}}>AGREGAR</button>
        </div>
      </div>
      {error && <div className="form-error mt-2">{error}</div>}
    </form>
  )
}

export default PostItForm;
