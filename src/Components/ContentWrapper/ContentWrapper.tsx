import './ContentWrapper.scss'
import React, { ReactNode } from 'react'

interface IContentWrapper {
	children: ReactNode
}

export default function ContentWrapper(props: IContentWrapper) {
	return <div id='content-wrapper'>{props.children}</div>
}
