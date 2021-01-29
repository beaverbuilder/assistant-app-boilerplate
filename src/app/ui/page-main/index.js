import React from 'react'
import { Page, Button } from 'assistant/ui'
import AppIcon from '../../../icon'

/**
 * Your app receives several props from the system.
 *
 * {
 *     baseURL: "/example-app",
 *     handle: "example-app",
 *     isAppRoot: true,
 *     label: "Example App"
 * }
 */

export const Main = ( { baseURL, label } ) => {
	
	return (
		<Page
			title={ label }
			shouldShowBackButton={ false }
			showAsRoot={ true }
			icon={ <AppIcon /> }
		>
		
			<h1>Hello, World!</h1>
			<Button to={ `${baseURL}/subpage` }>Go to subpage</Button>
		</Page>
	)
}

export default Main