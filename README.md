# Assistant Boilerplate App

A WordPress plugin that demonstrates how to register a custom Assistant app. This is for use with the [Assistant plugin](https://wordpress.org/plugins/assistant/). 

## Installation
Install the boilerplate plugin into your WordPress instance (and activate it). To build the scripts you'll want to open a terminal to your plugin directory (or cd there ) and run `npm install` to get dependencies set up. Then `npm run dev` to start building and watch for files changes.

## Once Installed
A new example app should be available if you click on the "Apps & Settings" (six dots) icon in the Assistant panel. On your site:
* Select "Assistant" from the WordPress admin bar or using the pencil icon. The panel should appear.
* In the icon toolbar on the outer edge, select the last icon (six-dots)
* You should see a list of all available apps with your new Example App as the last item.
* You can drag the item up in the list to pin your app to the toolbar.

## Webpack
Webpack is already configured to create a js file that registers your app as well as a separate chunk for the app itself that gets lazy-loaded. See the `src` folder for details.

Webpack is also set up to give you access to several provided libraries via externals. These are libraries that are either provided by WordPress or Assistant so that your app can use the same copies and not run into duplication issues. These libraries include:
* react
* react-dom
* @wordpress/i18n
* react-router-dom
* framer-motion
* redux

Assistant also adds it's own API as externals which is how you can access the registration function. Webpack is setup to let you import from the following externals:
* assistant ( maps to `window.FL.Assistant` )
* assistant/ui ( maps to `window.FL.Assistant.ui` )
* assistant/data ( maps to `window.FL.Assistant.data` )

Example
```
import React from 'react'
import { Page } from 'assistant/ui'

const MyPage = () => (
    <Page title="My Page">Page!</Page>
)
```
When you import from any of the externals above you will be given a reference to the shared copy of that library rather than it being bundled into your js build.