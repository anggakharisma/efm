import os from 'os';
import fs from 'fs';
import React, { useState, useEffect } from 'react'

import withMainLayout from '../../Layout/WithMainLayout/Main'
import FolderItem from '../../Components/FolderItem/FolderItem';
import Folder from '../../Components/Folder/Folder';


// Default screen
function Default() {
    const [homeDir, setHomeDir] = useState<any>([]);

    useEffect(() => {
        fs.readdirSync(os.homedir()).forEach(file => {
          setHomeDir((homeDir: any) => [...homeDir, file]);
        });
    }, []);

	return (
		<>
            <h1>HOME</h1>
            <Folder>
                { 
                    homeDir.map((item: any, id: any) => {
                        const pattern = /^[^.]+$/g;
                        return pattern.test(item) ? (
                                <FolderItem name={item} key={id} />
                        ) : '';
                            
                    })
                }
            </Folder>
		</>
	)
}

export default withMainLayout(Default);
