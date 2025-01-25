# Project configuration

1. Install proper version of node
   Suggested node version v22.11.0. If you have `nvm` installed, just use `nvm install`
2. Install packages
   `npm install`

# Run locally

After setting up the project, you can run it locally by typing
`npm run dev`
After starting the local server, go to http://localhost:5173/ or type `o + enter` in the server terminal

# Technical decisions

1. Implemented eslint, prettier, typescript to ensure coherent code formatting and type safety
2. Implemented husky pre-commit hook to ensure code check is executed by every developer before committing changes
3. Implemented NVM to ensure all developers use the same version of NodeJS
4. Implemented Tanstack Query to start handling requests caching. It'll also be used to handle loading an errors
