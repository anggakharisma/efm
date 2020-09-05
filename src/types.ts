import { ReactNode } from 'react'

export interface Drive {
	enumerator: string
	busType: string
	busVersion: string
	device: string
	devicePath: string
	raw: string
	description: string
	error: string
	size: number
	blockSize: number
	logicalBlockSize: number
	mountpoints: { path: string }[]
	isReadOnly: boolean
	isSystem: boolean
	isVirtual: boolean
	isRemovable: boolean
	isCard: boolean
	isSCSI: boolean
	isUSB: boolean
	isUAS: boolean
}

export interface FolderType {
	name: string
	clickFunc: (e: any) => void
	hash: string
}

export interface ContentWrapperType {
	children: ReactNode
}

export interface FolderWrapperType {
	children: ReactNode
}
