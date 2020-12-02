import './Folder.scss'
import React from 'react'
import { FolderWrapperType } from '../../types'

export default function FolderWrapper(props: FolderWrapperType) {
	return <div className='folder'>{props.children}</div>
}
