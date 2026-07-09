import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PostItList } from './componentes/PostItList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//<React.StrictMode>
		<PostItList />
	//</React.StrictMode>
	// React.StrictMode se deshabilitó porque interfería con la persistencia
	// mediante localStorage durante el desarrollo de esta evaluación.
)

