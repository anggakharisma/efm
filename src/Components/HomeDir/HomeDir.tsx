import React, { useState, useEffect } from 'react'
import { readdirSync } from 'fs'
import { homedir } from 'os'
import crypto from 'crypto'
import FolderItem from '../FolderItem/FolderItem'
import {HomeDirType} from '../../types'

const HomeDir = (props: HomeDirType) => {
	const [homeDir, setHomeDir] = useState<any>([])
	const [folderSelected, setFolderSelected] = useState<any>([])
	useEffect(() => {
		readdirSync(homedir()).forEach(file => {
			setHomeDir((homeDir: any) => [...homeDir, file])
		})
	}, [])

	return homeDir.map((item: any, id: any) => {
		const pattern = /^[^.]+$/g
		let hash = crypto
			.createHash('md5')
			.update(item + id)
			.digest('hex')

		// Check if folder selected with hash ????
		return pattern.test(item) ? (
			<FolderItem
				clickFunc={() => {
					setFolderSelected([])
					setFolderSelected((folderSelected: any) => {
						return folderSelected.includes(hash)
							? folderSelected
							: [...folderSelected, hash]
					})
				}}
				name={item}
				key={id}
				hash={folderSelected.includes(hash)}
			/>
		) : (
			''
		)
	})
}

export default HomeDir
