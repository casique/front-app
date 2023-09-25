# FrontApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

The project has two components: the data search ("/busqueda") and the data dashboard ("/resumen"). The DataBase is located in the Json file ("/src/assets/db.json"). With this file is possible to create more test cases for more people in the database. The list of countries is consumed from the link `https://restcountries.com/v3.1/all`. This list is consumed by the service ("/src/app/services/lista.services.ts"). After filtering and setting the list in an array, it is sorted alphabetically to have a list perfectly ordered to find the country easily. 

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
