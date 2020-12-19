import './Sidebar.scss'
import React from 'react'
import useDriveList from '../../Hooks/useDriveList'
import {Drive} from '../../types'

export default function Sidebar() {
  const driveList: Drive[] = useDriveList()
	return (
		<div id='sidebar'>
			<div className='content'>
				<h2>Sidebar</h2>
        <ul>
          {driveList.map((item: Drive, id: number) => {
            return <li key={id}>{item.device}</li>
          })}
        </ul>
			</div>
		</div>
	)
}
