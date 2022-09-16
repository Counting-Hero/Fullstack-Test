# Counting Hero Fullstack Test

## Before you start

This is a simple test constructed to verify your knowledge both within backend ecosystems such as NodeJS and NestJS, and frontend ecosystems such as React.
In this test we have made a simple fullstack template that you are going to use to display information, here we're using NestJS and React.

## Description
In this fullstack application your task is to display a list of users that is defined in the backend. Both the 
backend and frontend is unfinished and need your help to get up and running. Below you will get the details on what's missing in 
the two folders.

`Expected time usage is 15-35 minutes`

### Dependencies

In this project you will need Node installed on your computer. By default `npm` is included as the package manager, but our examples uses `yarn`. This is not a limitation but rather a preference, you are free to use any package manager you prefer.

### Frontend

Here you have an empty file called `src/pages/Users.js`. Your task here is to make this file render a list of users fetched from the backend. The Users page
does not have to be a list, but can also be a series of cards or any other creative way of displaying the users. As long as it contains an intuitive design and we can
see all users, the test is completed.

`We made this with create-react-app, so feel free to look at the official React documentation`


### Backend

We have defined a list of users here, but the API is just returning an empty array. You need to fix this issue so our frontend can visualize
the users!

`Feel free to consult the NestJS documentation to understand the structure`

---

## Getting started

### Frontend

Run the following commands to get the frontend running:

*We are using yarn here, feel free to use npm or pnpm if you prefer that.*

*Install all packages*
```bash 
$ yarn
``` 

*Run the application in watch/hot-reload mode*
```bash
$ yarn start
``` 

**You should now see a page with the text "The app is running!"**

### Backend

Run the following commands to get the backend running:

*Again, feel free to use any package manager that you want.*

*Install all packages*
```bash 
$ yarn
``` 

*Run the server in watch/hot-reload mode*
```bash
$ yarn start:dev
``` 

**The console should be populated with green messages including one that states that the application started successfully**

---

## Rules

### Copying

All candidates are receiving the same test, if the solutions contains components that are identical, we will do a check and see if the solutions are copied from the internet. Using official documentation is
allowed, but copying code/solutions from StackOverflow or equivalent is not allowed.

### Packages

You are allowed to use Bootstrap, TailwindCSS and custom CSS/SCSS. The only constraint is that if you use fully designed components you have to override the styles and display
your CSS/HTML knowledge.

---

## Delivering
Your solution should be delivered as a github repository that we can view. Commit regularly so we can see clearly what order you solved the problems in.

*If you for any reason make it private, give the user [mVabo](https://github.com/mVabo) read access*

---

## Our testing

When testing you application we will pull it down from Git, run the backend, then the frontend, and the first thing we should see is a complete list of users. Design is not important, but code-style and code-quality will be used to evaluate the solution