import './ContentMain.scss'
import React, { ReactNode } from 'react'

interface IContent {
	children: ReactNode
}

export default function ContentMain(props: IContent) {
	return <div id='content-main'>{props.children}</div>
}
