import './FolderItem.scss';
import React from 'react';
import {FolderType} from '../../types';

export default function FolderItem(props: FolderType) {
    return (
        <div className="folder-item">
            <h1>ICON</h1>
            <h3>{ props.name }</h3>
        </div>
    )
}
