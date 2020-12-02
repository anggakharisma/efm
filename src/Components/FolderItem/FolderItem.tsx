import './FolderItem.scss'
import React from 'react'
import { FolderType } from '../../types'
const FolderIcon = require('../../Assets/folders.svg') as string

export default function FolderItem(props: FolderType) {
	return (
		<div
			className={
				props.hash ? 'folder-item selected' : 'folder-item'
			}
			onClick={props.clickFunc}
		>
			<img src={FolderIcon} alt={props.name} />
			<h4>{props.name}</h4>
		</div>
	)
}
