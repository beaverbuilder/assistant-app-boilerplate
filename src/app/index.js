import React from 'react'
import { App } from 'assistant/ui'
import { Main, SubPage } from './ui'

/**
 * Root screen/nav setup.
 * 
 * Your app could return a single react screen here but most likely you'll have multiple pages you want to route between.
 *
 * Assistant apps use react router for navigation.
 * While you absolutely can use { Switch, Route, Link, ... } from 'react-router-dom' in your app,
 * Assistant provides a convenience component called `<App.Config />` for simple root setups.
 */
export default props => (
	<App.Config
		pages={ {
			default: Main,
			'subpage': SubPage
		} }
		{ ...props }
	/>
)