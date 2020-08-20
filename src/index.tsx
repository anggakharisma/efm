// order to import: CSS, React, node, code, components, assets
import './Stylesheets/Normalize.scss'
// React
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
