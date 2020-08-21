import './Frame.scss'
import React, { useState } from 'react'
import withTitlebar from '../../Hooks/useTitlebar'
const { remote } = require('electron')

export default function Frame() {
	const [titlebar] = withTitlebar()
	const [windowState, setWindowState] = useState({
		isMaximized: false
	})

	const toggleWindow = (): void => {
		if (!windowState.isMaximized) {
			remote.BrowserWindow.getFocusedWindow().maximize()
			setWindowState({
				...windowState,
				isMaximized: true
			})
		} else {
			remote.BrowserWindow.getFocusedWindow().restore()
			setWindowState({
				...windowState,
				isMaximized: false
			})
		}
	}

	const minimizeWindow = (): void => {
		remote.BrowserWindow.getFocusedWindow().minimize()
	}

	const closeApp = (): void => {
		remote.BrowserWindow.getFocusedWindow().close()
	}

	return (
		<div id='frame'>
			<h4>{titlebar}</h4>
			<ul>
				<li onClick={minimizeWindow}>-</li>
				<li onClick={toggleWindow}>Toggle</li>
				<li onClick={closeApp}>x</li>
			</ul>
		</div>
	)
}
