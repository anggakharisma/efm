import './Sidebar.scss'
import React from 'react'
import useDriveList from '../../Hooks/useDriveList'
import {Drive} from '../../types'

export default function Sidebar() {
  const driveList: Drive[] = useDriveList()
  console.log(driveList)
	return (
		<div id='sidebar'>
			<div className='content'>
				<h2>Sidebar</h2>
        <ul>
          {driveList.map((item) => {
            return <li>{item.device}</li>
          })}
        </ul>
			</div>
		</div>
	)
}
