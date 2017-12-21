# Terribly Tiny Tales Project(Front-End)

This project serves as the front end for TTT project

- A front end which accepts a number input N with a Submit button (Angular 4)
- On entering a value and pressing submit, a request is sent to a node based backend (link)
- The backend fetches a file hosted at http://terriblytinytales.com/test.txt and returns the top N most frequently occurring words in this file.
- The retrieved data (the top N words and their frequency of occurrence) is then displayed, in a tabular format.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Project Structure

The angular front-end broadly consists of two components (one is the form which accepts the input and the second one is the table).
- input component
- table component

Used http module (angular) to make a post request to the backend server (Hard-coded to run at localhost:3000) (Blah)
Alternatively could have used an XHR request (look for commented code)

Rest is kinda self explainatory

## Running this thing

Clone this repo locally and run npm-install once to install required node modules. (You should have angular CLI installed to run this project)

With the backend server (link again) listening at 3000, a simple ng serve should start serving the front-end at localhost:4200

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
