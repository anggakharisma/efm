import './Default.scss'

import React from 'react'

import withMainLayout from '../../Layout/WithMainLayout/Main'
import FolderWrapper from '../../Components/Folder/Folder'
import HomeDir from '../../Components/HomeDir/HomeDir'

// Default screen
function Default() {
	return (
		<div id='default'>
			<h1>HOME</h1>
      <FolderWrapper>
        <HomeDir />
      </FolderWrapper>
		</div>
	)
}

export default withMainLayout(Default)
