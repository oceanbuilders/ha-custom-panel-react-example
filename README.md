# ob-support-panel

## Home Assistant Setup

This is a home assistant custom panel as described by https://developers.home-assistant.io/docs/frontend/custom-ui/creating-custom-panels/

An example when adding this panel to home assistant configuration.yaml:

panel_custom:

- name: ob-support-panel
- sidebar_title: Support
- sidebar_icon: mdi:react
- url_path: support
- module_url: /local/support-panel/ob-support-panel.js
- embed_iframe: true

The name value needs to match what is defined in the index.tsx.

The embed_iframe is set to true so that ReactJS doesn't conflict with home assistant's front end framework.

## Build Scripts:

There are 3 build scripts:

- npm run build - For minimal dev build without dev-tools
- npm run build-dev-tools - For dev build with dev-tools
- npm run build-prod - For production build

For the first 2 build scripts, there is a copy build files step to deploy the files into home assistant. This requires the home assistant config folder to be accessible to complete. Update the shx cp commands in the package.json to reflect your settings.

Also the webpack.config.js file needs to be updated with your settings (filename at a minimum) for all 3 configurations.

For React Dev Tools to be available in the browser, as this custom panel is being loaded in an iframe, the standalone version of dev tools needs to be used. This is run by running the `npm run build-dev-tools` build, then running `react-devtools` from the VS Code terminal, and then navigating to the custom panel in the browser.

## Lit Element to React\Redux State

The https://github.com/home-assistant/custom-panel-starter-kit-react/ repo gives an example of how updated state can be passed from Lit to React. While this method works for updating state, passing updated state through props at the top of the react app means that every state update will re-render the entire react app. As such, Redux was implemented to control re-rending to components that need re-rendering.

This custom panel uses redux toolkit to slice from the redux state as described here - https://redux-toolkit.js.org/tutorials/typescript.
The PanelRootElement.tsx then evaluates if required values of the state have updated and if so, dispatches the new value to the Redux store. E.g updateState(value.auth.data.access_token, selectToken, updateToken);
The UI components further down the tree can select the required values from the Redux store via a hook which will re-render the component when the value changes. E.g const token = useAppSelector(selectToken);

## Material Tailwind

https://www.material-tailwind.com/ was configured to standardise how CSS is applied throughout the app. This is a relatively new package, but builds on https://github.com/mui/material-ui and https://tailwindcss.com/ which are well established packages. The VS Code extension for tailwind css is recommended for developer convenience https://tailwindcss.com/docs/editor-setup, and the quick search on the tailwind website is a good resource for finding CSS class names.

## ToDo

- Investigate if disconnectedCallback in PanelRootElement is needed (currently not working)
- Setup Ocean Builders theme as default for material tailwind
- Investigate webpack settings or typescript syntax so that break points can be placed in the return section of a component.

## Initial repo template

This project started from https://github.com/deadwing7x/react-with-webpack and configuration setting for typescript, npm, webpack & bable may need updating.
