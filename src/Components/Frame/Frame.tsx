import './Frame.scss'
import React, { useState } from 'react'
const { remote } = require('electron')

export default function Frame() {
	const [windowStats, setWindowStats] = useState({
		isMaximized: false
	})

	const toggleWindow = (): void => {
		if (!windowStats.isMaximized) {
			remote.BrowserWindow.getFocusedWindow().maximize()
			setWindowStats({
				...windowStats,
				isMaximized: true
			})
		} else {
			remote.BrowserWindow.getFocusedWindow().restore()
			setWindowStats({
				...windowStats,
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
			<h4>Title</h4>
			<ul>
				<li onClick={minimizeWindow}>-</li>
				<li onClick={toggleWindow}>Toggle</li>
				<li onClick={closeApp}>x</li>
			</ul>
		</div>
	)
}
