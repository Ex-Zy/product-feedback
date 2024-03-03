# Product feedback app

This is a solution to the [Product feedback app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6). 

## Main features
- [x] Create, read, update, and delete product feedback requests
- [x] Receive form validations when trying to create/edit feedback requests
- [x] Sort suggestions by most/least upvotes and most/least comments
- [x] Filter suggestions by category
- [x] Add comments and replies to a product feedback request
- [x] Upvote product feedback requests
- [x] View the optimal layout for the app depending on their device's screen size
- [x] Change products feedback status with drag'n'drop for roadmap page
- [ ] Saving state after changes on page


## Start project

```bash
# Install dependencies
npm install

# Run fake api with json-server
npm run api

# Start local dev server
npm run dev
```

## List of npm scripts

Scripts name          | Description                                                      
:------------------|:----------------------------------
`npm run build`           | Type-Check, Compile and Minify for Productionclient dev server(preferable)
`npm run test:unit`  | Run Unit Tests with [Vitest](https://vitest.dev/)
`npm run lint`  | Lint with [ESLint](https://eslint.org/)
`npm run deploy`         | Deploy to [Github Pages](https://ex-zy.github.io/product-feedback/)

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.
- **Bonus**: Build this project as a full-stack application

### Screenshot

![](./screenshots/preview.png)

### Links

- Solution URL: [Github](https://github.com/Ex-Zy/product-feedback/)
- Live Site URL: [Heroku](https://ex-zy.github.io/product-feedback/)

### Built with

- Vite, Vue 3, Typescript, Pinia

## Author

- Website - [Sergey Nagornykh](https://nagornykh.me/)
- Github - [Ex-Zy](https://github.com/Ex-Zy)
- Frontend Mentor - [@Ex-Zy](https://www.frontendmentor.io/profile/Ex-Zy)
