import './Frame.scss'
import React, { useEffect, useState } from 'react'
const { remote } = require('electron')

export default function Frame() {
	const [isMaximimized, setIsMaximized] = useState<boolean>(
		false
	)
	const toggleWindow = () => {
		if (!isMaximimized) {
			remote.BrowserWindow.getFocusedWindow().maximize()
			setIsMaximized(true)
		} else {
			remote.BrowserWindow.getFocusedWindow().restore()
			setIsMaximized(false)
		}
	}
	return (
		<div id='frame'>
			<h4>Title</h4>
			<ul>
				<li>min</li>
				<li onClick={() => toggleWindow()}>max</li>
				<li>close</li>
			</ul>
		</div>
	)
}
