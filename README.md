## Requirements
- Node v12 or newer
- NPM or Yarn

## Installation

```bash
git clone https://github.com/alexey-kim/movies-app-web.git

cd movies-app-web

yarn install
```

## Running the application

Please make sure that **movies-app-api** is running

```bash
# Development mode
yarn start

# Production mode
yarn build && yarn start:localprod
```

## Testing

```bash
# Unit tests
yarn test
```

# Features
- Stack consists of Typescript in strict mode, React, Material UI, Inversify (DI), Reach Router (navigation).
- Code demonstrates concepts like abstractions, generic types, dependency injection, type safety, lazy loading, navigation, events, React hooks, React context, etc.
- All URLs are bookmarkable and human readable, e.g. */movies/1994-the-lion-king*, i.e. no database IDs in URLs.
- Responsive design:
  * All CSS units are defined in *rem* so that the content would scale in accordance with browser font size settings.
  * Layout is based on mobile first approach with the following breakpoints:
    * *xs* [0rem - 30rem)
    * *sm* [30rem - 48rem)
    * *md* [48rem - 64rem)
    * *lg* [64rem - 80rem)
    * *xl* [80rem - 120rem)
    * *xxl* [120rem and up]
- Accessibility:
  * Application supports light and dark themes in accordance with user settings.
  * All images have *alt* text (movie title)
- Performance:
  * Code is split at the page level (e.g. *All Movies*, *Movie Detail* pages) and then lazy loaded on demand only (e.g. when the user navigates to the page).
  * Intersection observer is used to implement infinite scroll whereby the next page of movies is loaded when the user scrolls to the bottom of *All Movies* page.
  * Intersection observer is used to lazy load all movie images. Until the image is fully loaded from the server, a skeleton with wave effect is displayed to the user.
  * All movie images contain *srcset* with multiple image sources so that the supported browsers can choose an optimal image to download.
- Testability
  * *Inversify* is used as a solution for dependency injection. The following services are registered in its container:
    * Event service
- Services
  * Event service
    * Type safe mappings between event types and their payloads.
    * Used for communication between components that sit in different React trees, e.g. *Header* and *Movie Detail* pages. This allows to keep components loosely coupled and testable. Example of such communication is when *Movie Detail* page sets a back button and title in the main app header.

## TODO
* Tests (though code should be testable).
* Create NPM package for code that is shared between back end and front end.
* Type safe and validatable configuration of the application.
* Exception handling (e.g. API exceptions, page not found, etc).
* Validation of back end responses.
* Localisation service with *onlanguagechange* event handler and lazy loading of required translations from the server, i.e. without loading of all translations to the client.
* Extract API calls to Movie service and inject it into components with dependency injection.
* Add *IntersectionObserver* polyfill to support older browsers.
* Add service worker to enable offline, HTTP request caching, etc.
* etc.
