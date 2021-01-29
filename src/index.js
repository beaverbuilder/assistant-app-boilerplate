import { lazy } from 'react'
import { __ } from '@wordpress/i18n'
import { registerApp } from 'assistant'
import AppIcon from './icon'

/**
 * This allows apps to be split into a separate chunk file and loaded only when first clicked.
 */
const App = lazy( () => import(
	/* webpackChunkName: "app-example" */ './app'
) )

registerApp( 'example-app', {
	label: __( 'Example App' ),
	root: App,
	icon: AppIcon,
} )