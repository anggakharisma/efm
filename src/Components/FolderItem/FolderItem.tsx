import './FolderItem.scss';
import React, { useEffect } from 'react';
import {FolderType} from '../../types';

export default function FolderItem(props: FolderType) {
    useEffect(() => {

    }, []);
    return (
        <div className="folder-item" onDoubleClick={ () => console.log("Clicked") }>
            <h1>ICON</h1>
            <h3>{ props.name }</h3>
        </div>
    )
}
