# Setup instructions

## Project configuration

1. Install proper version of node
   Suggested node version v22.11.0. If you have `nvm` installed, just use `nvm install`
1. Install packages
   `npm install`

## Run locally

After setting up the project, you can run it locally by typing

`npm run dev`

After starting the local server, go to http://localhost:5173/ or type `o + enter` in the server terminal

## Production build

In order to prepare the production build, use the following command:

`npm run build`

The production build is available in the ./dist folder.

# Architecture decisions

1. Vite or webpack - very fast development builds, hot code reload
1. React Context over Redux - lightweight, suitable for small to medium size apps like this. leveraging tanstack query to assist.
1. Tanstack Query - offers reduced boilerplate for managing server data, e.g. offers error handling, loading states and caching out of the box.
1. Typescript - reduction of bugs, runtime errors <3
1. Styled components over SCSS/tailwind - clean react code without messy classes, ability to name components. Also, I've noticed that styled components are used in Fourthwall :)
1. File organisation:

```
src/
├── components/ <- reusable components
    ├── common <- common, more complex components used in several pages
    ├── ui <- simple UI components
├── hooks/ <- reusable hooks used in many pages
├── pages/
    ├── pageX
        ├── components <- components used only in this page
        ├── hooks <- hooks used only in this page
├── context/ <- global state (could be store in case we move to Redux later)
├── utils/
├── types/
```

# Technical decisions

1. Implemented eslint, prettier, typescript to ensure coherent code formatting and type safety
1. Implemented husky pre-commit hook to ensure code check is executed by every developer before committing changes
1. Implemented NVM to ensure all developers use the same version of NodeJS
1. Implemented Tanstack Query to start handling requests caching. It'll also be used to handle loading and errors
1. Implemented React Context as a global state solution to avoid props drilling
1. Implemented Styled Components to handle styles.
1. Implemented Table component with placeholders to gracefully handle pagination.
1. Used React Hook Form to handle forms management

# Future improvements

1. implement CI/CD to enable prod deploy via a pipeline
1. dark mode/theming
1. multi-language support
1. implement e2e tests, e.g. in playwright
1. preload next page to improve user experience

# Limitations

1. The API offers sorting by the following fields: stars, forks, help-wanted-issues, updated. That means the requirement to implement sorting by every field isn't available out of the box.
1. The endpoint can be used without authentication with a limited amount of requests per minute and hour. We should never expose the token in the frontend app for security reasons, therefore, implementing authentication would require some backend work, e.g. implementing an express app, or using next.js.
