import './Stylesheets/App.scss'

import React, { useEffect, useState } from 'react'
import withMainLayout from './Layout/WithMainLayout/Main'
const ipcRenderer = window.require('electron').ipcRenderer

function App() {
	const [drives, setDrives] = useState<[]>([])
	const [osType, setOsType] = useState<string>('')

	useEffect(() => {
		async function getDriveList() {
			await ipcRenderer.send('drive-message')
			await ipcRenderer.on(
				'send-drive',
				(
					event: any,
					{ drives, os }: { drives: []; os: string }
				) => {
					setDrives(drives)
					setOsType(os)
				}
			)
		}
		getDriveList()
	}, [])

	return (
		<>
			{drives &&
				drives.map((item: any, index) => {
					return <h1 key={index}>{item.enumerator}</h1>
				})}
			<h1>{osType}</h1>
		</>
	)
}

export default withMainLayout(App)
