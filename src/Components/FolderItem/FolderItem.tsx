import './FolderItem.scss';
import React, { useEffect, useState } from 'react';
import {FolderType} from '../../types';

export default function FolderItem(props: FolderType) {
    return (
        <div className={props.hash ? "folder-item selected": "folder-item"}
            onClick={props.clickFunc}
        >
            <h1>ICON</h1>
            <h3>{ props.name }</h3>
        </div>
    )
}
