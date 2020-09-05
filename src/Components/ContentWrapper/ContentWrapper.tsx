import './ContentWrapper.scss'
import React from 'react'
import {ContentWrapperType} from '../../types'

export default function ContentWrapper(props: ContentWrapperType) {
	return <div id='content-wrapper'>{props.children}</div>
}
