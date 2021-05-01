# Reactive Books, A ReactJS Bookshelf

![Showcase.gif](/Showcase.gif)

## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Features](#Features)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

## Summary

Reactive Books is a bookshelf app built using ReactJs that I built to practice front end programming and React.JS as part of my udacity nanodegree.

It uses a NodeJs server hosted by Udacity as a backend to retrieve Google books data, and has a sleek and modern design.

It demonstrates my understanding of React, components,components life cycle, states, and React Router 

## Technologies

NodeJS was used as the server.
React, React Router were used for the front end.


## Features

1. Add books from Google book library.

2. Choose which shelf to add the book to.

3. Update bookshelf and communicate the update to the backend.

4. Display extensive information for a particular book.

5. Effective use of the router.

6. Added a character limit when viewing the latest entries.

## Structure 
```
+---public
|   |   favicon.ico
|   |   favicon.ico.old
|   |   index.html
|   |   
|   +---cursors
|   |       arrow.png
|   |       beam.png
|   |       expand.png
|   |       hand.png
|   |       
|   \---ratings
|           0.5.png
|           0.png
|           1.5.png
|           1.png
|           2.5.png
|           2.png
|           3.5.png
|           3.png
|           4.5.png
|           4.png
|           5.png
|           undefined.png
|           
\---src
    |   App.css
    |   App.js
    |   App.test.js
    |   Book.js
    |   BooksAPI.js
    |   BookShelf.js
    |   BookView.js
    |   index.css
    |   index.js
    |   ListBooks.js
    |   SearchBooks.js
    |   ShelfChanger.js
    |   
    \---icons
            add.svg
            arrow-back-black.svg
            arrow-back.svg
            arrow-drop-down.svg
            logo.svg
            search.svg

```

## Usage and Installation

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages
```
npm install
```
```
npm start
```
