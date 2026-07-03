import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PostItList } from './componentes/PostItList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PostItList />
	</React.StrictMode>
)

