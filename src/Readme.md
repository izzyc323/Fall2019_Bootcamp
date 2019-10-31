# Introduction to Front-end Development with React

In this assignment, we will continue to build upon our directory application by creating a front-end interface with React.js to display listings, as well as the ability to add new listings and delete old ones. 

This readme file contains a very detailed overview of the technologies and concepts we will be using for this project. I highly suggest reading through it throughly and as you start working on the project visiting many of the linked items to understand the concepts and technologies in more depth.

### FRONT-END DEVELOPMENT
Front-end web development revolves around anything you create that the users of that specific app sees. To put it plainly, it is everything to do with the User Interface (UI) of the app.

When developing the UI of your web application you will be using three major languages:
- [**HTML**](https://www.w3schools.com/html/) (HyperText Markup Language) is a [**markup language**](https://en.wikipedia.org/wiki/Markup_language) most commonly used to create web pages. HTML is used to build the structure of your web page.
- [**CSS**](https://www.w3schools.com/css/default.asp) (Cascading Style Sheets) is used to describe the presentation of our HTML pages. It is a styling markup language is used to format the appearance of different structural elements. 
- [**JavaScript:**](https://www.w3schools.com/js/default.asp) A programming language is used to describe the functionality and handle all the dynamic elements on the web page. 
- [**JSX**](https://reactjs.org/docs/introducing-jsx.html) - JSX is a syntax extension to JavaScript used by React. JSX mixes HTML and JavaScript. It is similar to a template language, but it has full power of JavaScript.

If you aren't familiar with these technologies, please go through [this tutorial](http://learn.shayhowe.com) to learn the fundamentals of these two web technologies before continuing to the MaterialUI section. Keep in mind that this tutorial is very detailed and may take some time. Make sure to pay specific attention to:

-   The semantic nature of HTML
-   Layering CSS styles in a modular fashion using multiple classes
-   The box model
-   Positioning content with CSS

To get a basic introduction to JSX [**see the docs here**](https://reactjs.org/docs/introducing-jsx.html) and find a more in-depth tutorial on JSX [**here**](https://reactjs.org/docs/jsx-in-depth.html). In most cases, we will use JSX instead of Javascript to develop our application. 

### Material-UI
While we could create our web application with just HTML, CSS, and Javascript, writing all of our styles from scratch would be tedious. Say we have an application that will be used by desktop, tablet, and mobile users alike. Our CSS would have to be **responsive**, changing the layout of the page depending on the user's device. Luckily, we have [**Material-UI**](https://material-ui.com/), a responsive HTML/CSS/JS framework made by Twitter, to style our web applications. Material-UI provides a [grid system](https://material-ui.com/layout/grid/) for easy layout and [many components](https://material-ui.com/getting-started/supported-components/) that will give the application a clean, modern, and consistent look.

Material-UI's documentation is extensive, so don't worry about memorizing everything MaterialUI has to offer. If you understand the fundamentals of HTML and CSS, you should feel comfortable with the mechanics of the grid system and using classes to add styles to your HTML components. It'll be a better use of time to just refer back to the documentation whenever you need to add a new component to your webpage.

Getting Started - Material-UI  https://material-ui.com/getting-started/installation/ 

### Single-page Application
In this course and project we will be building, a single-page application. A single-page applictation is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded. Most modern web development relies on single-page applications. 

### Model-View-Controller (MVC) Architecture

A common design pattern used for developing user interfaces is the **model-view-controller** architecture. As the name suggests, in this architecture the application is broken up into three main components:

-   The **model** is where the application's main data objects are stored.
-   The **view** presents models to the user, and allows the user to interact with the models
-   The **controller** interfaces between the model and the view
    -   it updates models according to input provided by the user in the view
    -   it updates the view when a model changes

The MVC concept has many variations and often does not _exactly_ follow the pattern described above. You can take a look at [this page](https://developer.chrome.com/apps/app_frameworks) for more information, or simply go a Google search for MVC architecture.

### REACT

[**React**](https://reactjs.org/) is a JavaScript library for building user interfaces. Created by Facebook, Instagram, and the community. React is the V is View from the MVC architecture. React makes it (relatively) easy to start building an application by extending HTML so that the markup can describe not only the static webpage but also dynamic behavior. 

Note: Outside of the pure React library itself, there are 3 distinct versions of React: React-devtools, ReactJS.Net, React Native. Other than React itself, React Native is pretty popular as well for creating Native mobile apps. However we will be using React.js. 

**React Resources**
React certainly has a learning curve, and you should take some time going through tutorials to understand the basics. 
Below is a list of resources that may be helpful.

[**React Vocabrulary**](https://reactjs.org/docs/glossary.html) - This is a must read as you are working though the assignment and tutorials.
[**Thinking in React**](https://reactjs.org/docs/thinking-in-react.html) - This gives you an overview and philosophy for developing in React.

**Tutorials**
*Getting Started: Creating a simple react app*
[**Baby Name Tutorial**](https://www.youtube.com/playlist?list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m) This is a 12 part video tutorial that walks through how to create a simple web applicaiton. It is very similar to the app that you will create in this assignment. *NOTE: I highly recommend working throuhg this tutorial and adapting it to complete this assighment.*
[**Create-react-app**](https://reactjs.org/docs/create-a-new-react-app.html) is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

**Other Tutorials**
-   *Tutorialspoint*: [ReactJS Tutorial](https://www.tutorialspoint.com/reactjs/index.htm)
-   *Code Academy*: [Learn ReactJS](https://www.codecademy.com/learn/react-101)
-   *Tutorial provided from the [*ReactJS website*](https://reactjs.org/tutorial/tutorial.htmll)
-   *Egghead_io* [videos on ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-react)

**React Concepts to Focus on**
**Note:** You _do not_ need to go through all of these, just start to get familiar enough with React-specific concepts to complete this assignment, particularly the following:

*React Basics*
- ReactDOM - https://reactjs.org/docs/react-dom.html
*Note: ReactDOM uses camelCase property naming convention instead of HTML attribute names. For example, tabindex becomes tabIndex in JSX. The attribute class is also written as className since class is a reserved word in JavaScript.*
- DOM Elements - https://reactjs.org/docs/dom-elements.html
- React components -   [Components](https://reactjs.org/docs/react-component.html)  
*Note: Component names should also always start with a capital letter <Wrapper/>*
-- render() -
-- constructor()
-- Import & Usage <component />
-- Export

*State & Pasing State*
-   Passing State - props
-- https://reactjs.org/docs/react-component.html#props 
-- https://reactjs.org/docs/render-props.html
-- https://reactjs.org/docs/components-and-props.html
-   refs - https://reactjs.org/docs/refs-and-the-dom.html
-- Forwarding Refs https://reactjs.org/docs/forwarding-refs.html
- this.state - https://reactjs.org/docs/react-component.html#state
--  this.setState
- .bind(this) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


*Processing an Array of objects*
- Filter -   [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- Map -   [Array.map](https://reactjs.org/docs/lists-and-keys.html) 

*Forms & Event Handling*
- Forms - https://reactjs.org/docs/forms.html
- Event Handling - https://reactjs.org/docs/handling-events.html
-- onClick
-- onChange 

### Assignment Overview
For this assignment you will be building upon our UF directory application by creating a front-end interface with React.js to display listings, as well as the ability to add new listings and delete old ones.

#### In this GitHub Repository, you are given the following files
*When using the create-react-app to get a starter application up and running, you can replace the src file with the src file from this assignment*
- *Data.js* - A list of buildings formatted to work with React and JSX to render the contents to the browser
- *index.css* - A starter CSS templage for you to use for this project
- *app.css* - An empty file that we aren't using for this project but do not delete it as it will affect the functioning of your program
- *index.js* - This file is used in creating the application file that you will be manipulating through the App.js file. This is where we have injected the data.js file and the building data that we pass around for the entire application.
- *App.js* - This is the main application we are developing. The majority of our development will be in this file.
-- It prints out the directory listings
-- It has a Textbox for searching/filtering the results
-- It has a display box for printing out more details about the selected building
-- It also imports and use everal React Component files to implement its functionality
- React Component Files - *React use compoenents to organize and squirrel away functionality so that we can reuse it in multiple places. Ultimately, it allows our code to look cleaner and maximizes reusability for future developmen.*
-- *BuildingList.js* - This is a React Component that prints the building code and the name to the screen
-- *Search.js*  - This is a React Component that filters the contents of the list based on the user's input in the textbox
-- *ViewBuilding.js* - This is a React Component that allows us to view additional listing details for the current selected building when a user clicks on a listing

#### Development Goals:
*As you develop the solution to this assignment you will need to complete at least the following tasks. 
Note: You will need to add additional functionality to be able to add and remove elements from the list.*
- App.js
-- Create the filterUpdate() function
-- Create the selectUpdate() function

- BuildingList.js: *In this file you will*
-- create a filter on the building list constant that allows you to filter on the name of the building 
-- display only the buldings the meet the filter criteria
-- Create an onClick listener action that will allow you to click on a building name and capture the ID

- Search.js: *In this file you will*
-- Capture the text that is typed into the textbox and store this value using the filterUpdate() function
-- use the onChange listener function
-- You will need to understand how to use ref values from form inputs

- ViewBuilding.js:
-- Captured building ID to look-up the additional information for the building
-- Return additional details of the building to be rendered on the screen for the user



### Assignment
*Note: This is a big assignment, start early and work on getting simple things working first. Remember the Baby Name App tutorial listed in the React section, provides a video tutorial walkthrough of many of the feaures you will be completing for this project.*

1. Install the create-react-app
To help us get started quickly, we will be using the create-react-app, a template generator for creating React Applciations quickly without having to install a ton of external dependencies. 

- after it is installed, you should be able to cd into the project directory and then type *npm start* and it will start up a server for you and open your web brower with a starter page.
- after this you should open the folder and replace the src file wit the file for this github repo. You should then be able to see a listing of the building codes and buildings, search/filter texbox and space to outpu details about your project.

2. Install Material-UI
*Getting Started - Material-UI  https://material-ui.com/getting-started/installation/* 
In your console: npm install --save @material-ui/core
*You will use this later in the project when you start to style your page* 

3a. Once you install the create-react-app you can create an starter application for this assignment.
*create-react-app <projectname>*

Once you enter this command it will create a starter project and you will need to cd into this directory. This is where you will need to add the src file from this github repo. 

There is a src file within the create-react-app project you've just created. You will need to replace everything in it with the src file from github except for the registerServiceWorker file. Keep your registerServiceWorker file.

3b. Use the starter code to create a front-end interface with React.js to display listings, as well as the ability to add new listings and delete old ones.
*Note* In this assignment, we won't connect the front-end to the back-end. We are only focused on creating your front-end user interfact.

*Debugging Tips:* Use console.lo statements in your render functions g to print to the browser console to debug your program and to ensure you are passing the data around that you expected. This will help tremendously when you have errors that you can't figure out. 

4. Style the User Interface of this app using CSS and MaterialUI to make this app look professional and user friendly. 
*Note:* THis will get you some points toward bidding on your project of choice for the final class project. See assignment rubric in Canvas for more details.
