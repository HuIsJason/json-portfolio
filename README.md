# JSON Portfolio

JSON Portfolio is a personal portfolio template designed with a JSON theme, where page contents are dislayed in JSON objects with Monokai syntax highlighting and a dark theme inspired by VSCode's Material Theme Darker.

Page contents are retrieved from JSON files under `src/db/`, so it is completely template-able as long as the JSON files are formatted correctly. Sample placeholder portfolio info will be there for a simple guide on what info to populate the JSON files with.

[Check out a live version here!](https://jason-hu.com)

## Getting started

1. run `git clone https://github.com/HuIsJason/json-portfolio.git`
2. run `cd json-portfolio`
3. populate the JSON files under `src/db/` accordingly
4. add a profile picture under `src/assets/` called `ProfilePic.jpg`
5. run `yarn install && yarn start`

## Screenshots
![](https://imgur.com/a/LwdBMpc)
![](https://imgur.com/a/blA39VX)
![](https://imgur.com/a/6PqUT03)

## Technologies

JSON Portfolio was built with React, TypeScript, a Material-UI styling solution, and React Router. Deployed using Netlify.

## Future features

- implement responsiveness
- ~~complete Home page where basic info about the owner is displayed along with a profile picture~~
- ~~add Google Analytics~~
- ~~separating branches, where `master` will have the sample placeholder JSON info, and a `personal` branch with my (Jason Hu's) info~~
