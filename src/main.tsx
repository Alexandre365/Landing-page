import React from 'react'
import ReactDOM from 'react-dom'
import Head from './Header'
import Home from './Home'
import Precos from './Precos'
import Modelos from './Modelos'
import Seguro from './Seguro'
import Contato from './Contato'
import './index.css'


ReactDOM.render(
	<React.StrictMode>
		<Head />
		<Home />
		<Precos />
		<Modelos />
		<Seguro />
		<Contato/>
	</React.StrictMode>,
	document.getElementById('root')
)
