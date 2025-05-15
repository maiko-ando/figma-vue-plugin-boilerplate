# Figma Plugin Vue.js Boilerplate

This is a boilerplate for developing Figma plugins using Vue.js. It provides a starting point for creating powerful and interactive Figma plugins with a modern frontend framework.

## Overview

This plugin template uses Vue.js, TypeScript, and NPM to create a robust development environment for Figma plugins. Vue.js allows you to build a component-based UI, while TypeScript provides type safety and better developer experience.

## Getting Started

Below are the steps to get your plugin running. You can also find instructions at:

https://www.figma.com/plugin-docs/plugin-quickstart-guide/

First, download Node.js which comes with NPM. This will allow you to install TypeScript, Vue.js, and other
libraries. You can find the download link here:

https://nodejs.org/en/download/

Next, install the dependencies by running:

```
npm install
```

This will install Vue.js, TypeScript, and other required packages defined in package.json.

To get the latest type definitions for the Figma plugin API, run:

```
npm install --save-dev @figma/plugin-typings
```

## Development

We recommend using Visual Studio Code for development:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Start the development server: Run `npm run dev` in the terminal.

The build process will compile your TypeScript and Vue files and bundle them for use in Figma.

## Project Structure

- `code/` - Contains the plugin's main code that interacts with the Figma API
- `ui/` - Contains Vue components for the plugin's user interface
- `dist/` - Build output directory

## Building for Production

Run `npm run build` to create a production build of your plugin.

That's it! You're now ready to develop your Figma plugin using Vue.js.
