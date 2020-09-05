import './Stylesheets/App.scss'

import os from 'os';
import React, { useState } from 'react'

import withMainLayout from './Layout/WithMainLayout/Main'
import {Drive} from './types';
import useDriveList from './Hooks/useDriveList';


function App() {
	const driveList = useDriveList();

    const DriveList = () => {
        let mountPoints: any = [];
        switch(os.type()) {
            case "Linux":
                if(driveList[0] !== undefined) console.log(driveList[0].mountpoints);
                break;

        }
        return (
            <>
                <h1>ICON</h1>

                <h1>HOME</h1>
                <h3>{ os.homedir() }</h3>
            </>
        )
    }

	return (
		<>
            <DriveList />
		</>
	)
}

export default withMainLayout(App)
