# Financeapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Note ##

1. The latest LTS node version is 20.12.2. Need to switch to LTS version of node to run the app. 
    example: nvm install 20.12.2   nvm allows you to install and use different node versions
2. npm i bootstrap@5.3.3
3. npm install @fortawesome/fontawesome-free
4. npm i ng-openapi-gen


## Note for OpenAPI ##

For some reason, had to change the response type from blob to json in the fn -> search-controller -> get-search-stock-results.ts