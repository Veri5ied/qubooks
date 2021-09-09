# Getting Started with Running the ProJect

In the project directory, you can run:

### `yarn install`

This would get all dependencies used in creating this project and thus a node_modules folder is added to the project once `yarn install` is successful. If you are making use of npm, run `npm install` to perform the same action...

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console if any.

# Packages Used in Development Process

### `React Router Dom`

For navigation and changing routes

### `Apollo Client`

For client side workings with GraphQL

### `Beauty Stars`

An npm packages used to pass ratings value coming from our GraphQL API and thus rendering for each component.

### `Flickity`

A tiny library for faster generation of carousels

# Issues Faced While Completing the Task

Getting all featured books to render on the carousel is/was a pain. It works yeah but keeps breaking the application and at such it is not completed for the time being to avoid breaking the application.
<br> <br>
Also the images coming from the API are of different sizes and stylings hardly work on them. Most have outrageous width while some are of normal size. Max or min width and height won't work on them and this causes overflow on smaller screens (for images with bigger width).

# Requirements not covered.

Getting all featured books to render on the carousel and getting selected books to open on details page.

# Improvements to be Made

All functionalities/logic are hard coded out. Will be working on wiring them out to their individual components like the search, and cart functions

Update: Added search functionality
Pending: Wiring up cart function

<br>
Finally Completion of book details page as well as getting books on the carousel since the featured posts only returns a boolean

<br>
(Still working on making the project)
