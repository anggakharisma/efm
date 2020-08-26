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
           <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</>
	)
}

export default withMainLayout(App)
