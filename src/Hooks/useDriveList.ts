import { useState, useEffect }  from 'react';
import { Drive } from '../types';
const ipcRenderer = window.require('electron').ipcRenderer;

export default function useDriveList()
{
	const [driveList, setDriveList] = useState<Drive[]>([])
    useEffect(() => {
        async function getDriveList() {
            await ipcRenderer.send('drive-message')
            await ipcRenderer.on(
                'send-drive',
                (
                    event: any,
                    { drives }: { drives: Drive[]; }
                ) => {
                    setDriveList(drives);
                }
            )
        }
        getDriveList()
    }, [])

	return driveList;

}
