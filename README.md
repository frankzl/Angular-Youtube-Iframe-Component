# MusicQueuer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

I have developed this project, when I was thinking of a different idea (hence the name)

## Usage
If you want to integrate the Youtube API Iframe in your Angular 2 project, you can just extract the necessary components from my code.
The relevant code is in the <b>YoutubePlayerComponent</b> and the <b>WindowService</b>

Since the YoutubeIframeAPI needs to be loaded globally, I did this in the WindowService, where I reference the global window object.
You need to load this script in your index.html though <b>"https://www.youtube.com/iframe_api"</b>

If you don't understand my code, feel free to hit me up. The code is very messy at the moment. I just wanted to get it running. Since integrating iframes in Angular 2 felt very annoying to me, I thought I'd share my solution. :)



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
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
