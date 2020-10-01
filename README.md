[![Netlify Status](https://api.netlify.com/api/v1/badges/cfde6ee1-bb93-4af2-92b0-a2389d9612d3/deploy-status)](https://app.netlify.com/sites/zen-davinci-1978d3/deploys)

# JSON Portfolio

JSON Portfolio is a portfolio template designed with a JSON theme, where page contents are dislayed in JSON objects with syntax highlighting styles backed by a Monokai-like dark theme inspired by VSCode's Material Theme Darker.

Page contents are retrieved from JSON files under `src/db` so this is completely template-able as long as the JSON is formatted correctly. Sample placeholder portfolio info will be there for an easy guide on what info to populate the JSON files with.

**[Check out a live version here!](https://zen-davinci-1978d3.netlify.app/)**

## Getting started

1. run `git clone https://github.com/HuIsJason/json-portfolio.git`
2. run `cd json-portfolio`
3. populate the JSON files under `src/db` accordingly
4. run `yarn start`

## Technologies

JSON Portfolio was built with React, TypeScript, a Material-UI styling solution, and React Router. Deployed using Netlify.

## Future features

* completing the Home page where basic info about the person is displayed along with a profile picture
* separating branches, where `master` will have the sample placeholder JSON info, and a `personal` branch with my (Jason Hu's) info
* add Google Analytics
* implement responsiveness
