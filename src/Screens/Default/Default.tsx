import './Default.scss';

import { homedir } from 'os';
import { readdirSync } from 'fs';
import React, { useState, useEffect } from 'react'

import withMainLayout from '../../Layout/WithMainLayout/Main'
import FolderItem from '../../Components/FolderItem/FolderItem';
import crypto from 'crypto';
import Folder from '../../Components/Folder/Folder';


// Default screen
function Default() {
    const [homeDir, setHomeDir] = useState<any>([]);
    const [folderSelected, setFolderSelected] = useState<any>([]);

    useEffect(() => {
        readdirSync(homedir()).forEach(file => {
          setHomeDir((homeDir: any) => [...homeDir, file]);
        });
    }, []);

	return (
		<div id="default">
            <h1>HOME</h1>
            <Folder>
                { 
                    homeDir.map((item: any, id: any) => {
                        const pattern = /^[^.]+$/g;
                        let hash = crypto.createHash('md5').update(item + id).digest('hex');
                        return pattern.test(item) ? (
                                <FolderItem 
                                    clickFunc={() => { 
                                        setFolderSelected([]);
                                        setFolderSelected((folderSelected: any) => {
                                            return folderSelected.includes(hash) ? folderSelected : [...folderSelected, hash];
                                        });
                                    }} 
                                    name={item} key={id} hash={ folderSelected.includes(hash) }
                                />
                        ) : '';
                            
                    })
                }
            </Folder>
		</div>
	)
}

export default withMainLayout(Default);
