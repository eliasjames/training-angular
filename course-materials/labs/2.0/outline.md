#Intro to Angular

1. Day 1: Angular 1
  0. Schedule
    * Angular paradigm & getting started (review)
    * Built in directives, template expressions, and filters
    * Controllers and looping
    * Angular scope
    * Forms
    * UI Lab
    * (break)
    * Custom directives
    * Components (ng1.5)
  1. Why Angular?
    * Keeping track of state is hard
    * Single Page Applications have three types of state:
      * UI state: is this input checkbox true?
      * Application state: you switched two widgets into edit mode
      * Global state: authentication, settings
    * Efficient DOM manipulation is hard
    * jQuery does DOM well, but provides little large-scale structure
    * SPAs need a framework to promote organized, reusable, flexible code 
  2. Angular paradigm
    * Angular is primarily a system for:
      * declaring extensions to HTML - elements and attributes
      * performing dynamic DOM modifications described within those extensions
      * API to programmatically integrate other code (plugins & 3rd party)
    * Uses MV* Pattern 
      * Model in Javascript
      * View is extended HTML
      * Angular 1 uses Controllers, although theyre not traditional
      * Angular 1.5 & 2 use Components
      * John Papa and others recommend practicing MVVM (Model/View/ViewModel)
    * Angular pattern: 'register' functionality under a module
      * Modules are high level, standalone units of code
      * Once registered, functionality can be referenced elsewhere by name
      * Angular searches for registered names and passes in registered code
  2b. Angular Style Guide
    * John Papa has one of the most influential
    * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
    * General recommendations
      * Prefer controllerAs syntax whenever possible
      * Prefer named functions to anonymous ones wherever possible
    * File structure
      * Small functions, < 75 LoC
      * One component per file, < 400 LoC
      * Wrap components in an IIFE (automatically through build system is fine)
      * Put bindable (public) properties at the top of the file
      * Organize files by feature, not function
      * LIFT
        * Locating our code is easy
        * Identify code at a glance
        * Flat structure as long as we can
        * Try to stay DRY 
  3. Getting started
    * Valid HTML page
    * Script tag pointing to angular.js
    * Angular requires ng-app directive to init
    * examples/01-get-started
  4. Getting started: ng-app directive
    * Directives are Angular identifiers added to ordinary HTML
    * Angular attaches event listeners and/or modifies the DOM
    * Most commonly HTML attributes. Also HTML elements, comments, CSS classes
    * Begin with "ng-": <body ng-app>
    * Optionally, pass a value to a directive just like a regular attribute
    * <body ng-app="optionalAppName">
  5. Some built in directives
    * ng-class: add the result of template expression to the element as a CSS class
    * ng-blur: evaluate an expression when element loses focus 
    * ng-init: assign a property in the current Angular execution context
    * ng-include: fetch, compile and include an external HTML fragment
    * ng-switch: conditionally insert HTML
  6. Template expressions
    * Declare template expression using double brackets: 
    * <p>{{ 'this will ' + ' get concatenated' }}</p>
    * Angular evaluates and assigns result to a property of a binding target
    * Target may be ordinary HTML, directive, component
  7. Template expressions are limited JS. Not allowed:
    * host objects: window, console, Math
    * <script> tag (all other HTML permitted)
    * assignments (=, +=, -=)
    * the new operator
    * chaining expressions with ; or ,
    * increment and decrement operators (++ and --)
    * bitwise operators | and &
  8. Best practices for template expressions
    * No side effects
    * Quick execution
    * Simplicity
    * Idempotence
  9. Built in filters
    * Filters operate on a template expression 
    * Double brace syntax: <p ng-some-directive="{{ value | filtername }}"</p>
    * Chainable with pipe: {{ value | filtername | anotherfilter }}
    * Accepts parameters with colon: {{ value | filtername:oneparameter:anotherparam }}
    * Watch out for performance penalties (filters can be expensive)
    * examples/01-built-in-filters
  9a. Custom filters
    * Register custom functions with nG using a 'recipe' pattern
      * Recipe pattern: from a reference to a module, call a factory
      * module is a standalone unit of nG code 
      * Reference to a module: 
        * new module (note empty array): angular.module('someModuleName', [])
        * existing module: angular.module('someModuleName')
      * Factory call: .filter('thisFilterName', function (text) {...})
      * Factory function gets passed the value from when the filter was invoked
    * Recipe only gets invoked when the filter is used in a view 
    * Remember, custom filter should follow best practices
    * More complicated actions are better suited to directives
  10. Looping
    * ng-repeat can iterate arrays or objects
      * if array: "each-item-alias in someArray"
      * object: "(propertyNameAlias, propertyKeyAlias) in someObject"
    * ng-repeat can be nested
    * Not a list comprehension (can&apos;t access object properties) 
    * Gotcha: elements in collection must be unique by strict equality (===)
    * examples/03-simple-looping
  11. Looping - more features
    * Sets special properties within iterations: 
      $index, $even, $odd, $first, $middle, $last 
    * Use ng-init to set custom values within each iteration
    * Use ng-repeat-start and -end to add sibling elements
  12. Controllers
    * Use controllers as ViewModel: only coordinate data flow between the two
    * More complex functionality and business logic should live in a service
    * Controllers should never reference DOM
    * Recipe: from reference to angular.module, register via .controller(...)
    * .controller('cntrlName', function(dependencies) { ...init })
    * In HTML, add ng-controller directive with name as the value
    * <p ng-controller="cntrlName">Controller owns this content</p>
    * examples/02-filters-with-controller
  13. Angular Scope
    * Scope is an object that refers to the application model
		* Provides the execution context for expressions
    * Scope can observe model mutations ($watch) and propagate events ($apply)
    * Controllers and directives modify scope, but not each other
		* Scopes arranged in hierarchical structure mirroring the application DOM 
    * IOW, all scopes have a parent, some have children
  13a. Why scope?
    * Scopes can inherit, promoting composability
    * Memory management: when DOM changes, scope changes
    * Scope handles set up and tear down of bindings and listeners
    * Separates data model from application logic. Good for: 
      * reusability
      * testing
  13b. Scope inheritance
    * Four types (plus none) of scope inheritance
      0. None: directives by default
        Directive accesses & assigns values on parent scope directly. 
      1. Normal prototypal: ng-controller, ng-include, ng-switch, directive with option scope:true
        Tries to look up properties on child, followed by parent; assigns properties on child.
      2. Normal prototypal plus copy/assignment: ng-repeat
        Each iteration of ng-repeat creates a new child scope, which also gets a property with alias name.
      3. Isolate scope: directive with option scope:{}
        Object literal creates "blank", non-inherited scope. Reference to parent scope is still available. 
      4. Transcluded scope: directive with option transclude:true
        Normal prototypal scope inheritance, but also a sibling of any isolate scope.
  14. ControllerAs syntax (nG 1.2+)
    * Scope inheritance starts to get crazy when controllers are nested
      * <div ng-controller="ControllerOne">
          {{foo}}
          <div ng-controller="ControllerTwo">
            {{foo}}
            {{$parent.foo}}
    * Template value now coupled to DOM placement ($parent) - not moveable
      * <div ng-controller="ControllerOne as ctrl1">
          {{ctrl1.foo}}
          <div ng-controller="ControllerTwo as ctrl2">
            {{ctrl2.foo}}
            {{ctrl1.foo}}
    * Syntax not limited to views - heres a Directive Definition Object:
      * restrict: 'A',
        controller: 'SomeController',
        controllerAs: 'ctrl',
        template: '{{ctrl.foo}}'
  15. Forms
    * A form is a collection of related controls (input, select, textarea)
    * Control data often needs to be...
      * entered in a certain format
      * validated before submission
      * sent to a server for persistence
    * ngModel directive binds a form control to a property on the scope 
      * be careful of variable shadowing when parent/child or nested controller
      * be careful of how ng watches properties for updates
      * try entering trailing spaces in name field, then text. See how .length changes
      * getter/setter available via ng-model-options (make sure getter stays fast)
    * examples/04-forms
  16. UI Lab
    * Build a CRUD interface for management of a jukebox
      * Display a list of saved songs ("saved" meaning stored in the model)
      * Add, edit, delete a song. Fields: name, genre, number of plays
      * Create a button to "play" a song (add to number of plays)
      * Genre should be populated from an array in a controller. Optional: CRUD for genre
      * Validation 
        * name must be more than 2 chars
        * name limited to alphanumeric
  17. (break)
  18. Custom directives
    * Directives are the proper place for DOM manipulation
    * Use recipe: .directive('someDirective', function () { return {...}})
    * Factory function can return 
      * a directive definition object, which provides many options
      * or just the DDOs 'link' function, which is the key spot for DOM actions
  19. Directive Lab
    * Turn Jukebox UI into several nested directives
    * Break songs table into its own directive
    * Same with add/edit form
    * Pass a value to top-level directive to turn add/edit features on and off
  20. Components (nG 1.5)
    * Transitional step towards nG 2
    * Components are a subtype of directive representing a complete UI element
      * Bundles together a view, a controller, and bindings in simpler recipe
      * .component('cmpnName', _componentDefinitionObject)
      * Many Directive options are defaulted to Component values:
        * restricted to elements
        * transclude false
        * scope isolate
        * controllerAs $ctrl
      * Continue to use Directives to add custom behaviour to existing elements
    * Two way bindings are deprecated in 1.5 Components
      * nG 2 moves away from two way binding
      * They cause too many issues with parent scope and prevent full separation from DOM
      * Instead, specify one-way bind for display info
      * Then register an event handler (onChange, onDelete) 
2. Day 2
  1. Dependency Injection - Overview
    * DI is a design pattern which implements a principle named Inversion Of Control
    * IoC means this code knows as little as possible about code it calls. Instead,
      * this code states its dependencies
      * the "injector" is responsible for "providing" them
      * injector handles init, waiting for load, etc
      * this code just uses dependency without knowing any details
    * Benefits
      * Promotes lots of architecture best practices
      * Provide can be just-in-time: dont have to load all dependencies initially
      * Swappable with a mock object at test time
      * Excellent solution for async environment like browser
    * Drawbacks
      * Debugging context: breakpoint or console.log can be deeply nested in injectors 
      * Syntax/implementation can be automagical: injector is a black box
  1a. Dependency Injection - Mechanics
    * Analogy: Javascript has two phases: interpretation and execution
      * Interpretation verifies syntax and produces executable
      * Execution actually runs and attempts to resolve symbols
    * DI systems have two phases
      * Registration of dependencies
      * Execution once all dependencies are available
      * DI code will therefore also have two corresponding parts
  1a. Dependency Injection - Angular conventions
    * Inline Annotation Array
      * ['$ngBuiltIn', 'myDep', function (builtIn, myDep) {...}]
      * First n...elements in array declare dependencies
      * Last arg is the function to execute once deps are ready
      * Function arg names are arbitrary, deps passed in order 
    * Implicit annotation
      * Injectables: register first, use later
      * .controller('cntrName', function ($scope, myInjectable) {...})
      * nG knows how to provide built-in $scope
      * We have to register myInjectable via nG Provider
      * Gotcha: minimization can break DI - args get turned into (a, b)
  2. Providers
    * Angular itself is built using the Provider pattern
    * When we used .controller(), nG created controllerProvider
    * Providers are registered at config time and initted/injected at run time
    * Angular built-in providers include $http, $window, $route, $rootScope
    * angular.injector handles injection mechanics, often automatically
    * Use a provider or subtype when you want code to be 
      * reused across controllers
      * a singleton instance shared by all callers
  2b. Provider recipe syntax
    * Recipe: .provider('providerName', provider_)
    * provider_ can be:
      * Any object that has a $get method
      * A function that returns an object with a $get method
      * An Inline Annotation array that returns an object with a $get method
    * In practice, raw Providers are rare compared to their subtypes
  2b. Providers in practice
    * Declare a provider/subtype 
    * Elsewhere, require the provider via dependency injection
    * .controller('controllerName', ['providerName', function cntlrInit (prvdrName) {...})
    * Angular inits the provider on startup and injects the cached result
    * Injected results of Providers are always singletons
  2a. Services, Factories, Values and Constants, oh my!
    * These are Angular dependency injection patterns 
    * All of these are syntactic sugar on top of Provider
    * Gotcha: all these subtypes are commonly referred to as "services"
  2c. Factories
    * Factories combine the flexibility of Providers with a simpler syntax
    * recipe passes a function as the $get method of provider_
    * .factory('factoryName', inlineArrayNotationOrInitFunction)
    * That function gets invoked during provider creation
    * Example above becomes: .provider('factoryName', { $get: inlineArrayNotationOr... })
    * The return value of inlineArrayNotationOr... is what gets elsewhere 
      * Can be any value - a primitive, object or function
      * The revealing module pattern can be used to simulate private vars and methods
  2d. Services
    * Instead of invoking the target function, Services apply the "new" keyword 
    * Inside the service recipe function, use "this" 
    * .service('serviceName', function () { this.externalFn = function () {...}}
    * Gotcha: blog posts etc. sometimes refer to Services as "classes" - thats a stretch 
      * Remember the service itself is a singleton
      * Even though it gets newed during injection, the result gets cached
      * Therefore its misleading to label the Service itself as a class
      * The Service could contain a class-like method used to produce POJOs
      * But remember you should not "new" inside controllers
  2e. Factories versus Services
    * If you manually add "new" inside a factoryFn, it behaves exactly like Service
    * Service is nothing more than sugar on top of Factory
    * Why does it exist then?
      * New-ing objects inside controllers is strongly discouraged
      * .injector handles new-ing for you
      * If you need to use prototypal construction, .service saves boilerplate
  2f Remember all Provider types are singletons
    * Angular injector always caches the return value
    * So in practice, when using these declarations...
      * app.factory('fact', fn);
      * app.service('serv', fn);
      * app.provider('prov', fn);
    * ...the injector internally handles it like this 
      * cache.fact = fn()
      * cache.serv = new fn()
      * cache.prov = (new fn()).$get()
  2g. Values and Constants 
    * More sugar - a provider that does nothing but return a value
    * .value('valueName', valueValue).constant('constantName', constantValue)
    * The second argument can be any data type, including objects and functions
    * Functions are not invoked or newed, just returned. Therefore theyre not injectable
    * Use it to share data, and even code, in the form of functions 
    * (remember not to "new" the result though - will complicate testing)  
    * Only Constants are available during config (bootstrap)
    * app.config(function(valueName, constantName) { errors 'unknown provider valueName' })
  2h. Recap
    * Use singleton Providers to share data across the app
      * Factory => function
      * Service => new
      * Value => simple
      * Constant => config
  2i. $http Lab
    * Create a value named songsUrl
    * Create a service named songsAjax
      * Depends on $http and songsUrl
      * Returns a public interface method getSongs
    * Inject songsAjax into JukeboxUiController
    * Call getSongs and display results in a template
  3. Angular Material
    * Material is Googles UI "visual language" behind Android
    * Emphasizes unified experience, usability & accessibility, graceful degradation
    * "Material is the metaphor" - paper, ink, surface edges. "Motion provides meaning"
    * Angular Material is one implementation - Material Design Lite is another
    * AM depends on nG, ngAnimate, ngAria. MDL has no dependencies but less features
    * AM provides directives/components, MDL depends on classes + JS
    * Both provide grid system + widgets like dialogs, badges, tabs, autocomplete
  3b. Material in practice
    * Provide resources via link/script tags, module loader, npm install or whatever
    * Add 'ngMaterial' as a dependency to the module declaration
    * Angular.module('sbuxJukebox', ['ngMaterial']);
    * Various md- prefixed directives are now available
  3c. Material lab
    * Add an md-toolbar to the top of the page
    * Use md-tabs to break up the content area
    * Add an md-autocomplete to one of the tabs
    * Hook up the songsAjax service to the autocomplete 
  4. [break]
  5. Intro to Angular 2
    * Targets "evergreen" browsers - no legacy support (IE9+)
    * nG 2 is a major redesign, with many breaking changes
    * Emphasis on moving towards HTML5 web components
    * TypeScript recommended
  5a. Major changes
    * More like a reboot
    * The central API is now Components
    * Components are a type of Directive, those are still around
    * Providers are still around, but their sugar/subtypes have been removed 
    * Large portions of the API have been removed:
      * angular.module, scope, controllers, filters, ng-app
    * Greater reliance on dependency injection
      * nG2 only includes minimum functionality by default
      * Gotcha: common "undefined" or "not a function" errors when you forget an import 
  5b. Advantages gained by all these changes:
    * Smaller, more consistent API
    * Greater modularity/DI - import only what you need means smaller downloads
    * Greater separation from DOM - testing, IDE support
    * Performance speedups primarily due to jettisoning digest checking
    * Aligns closer with the future of web components
  5c. A word of caution
    * nG 2 is officially in beta. What does beta mean?
    * "we're now confident that most developers can be successful building large applications"
    * A platform is not just its code though, also its ecosystem
      * Tooling & 3rd party library support
      * Documentation
      * Error handling messages
      * Community support
    * IMO, nG2 ecosystem is not mature yet 
      * Example: nG2 can be written using ES5 or ES6, without TypeScript
        * However the development team has chosen not to document this usage
        * For this reason, we will stick to TypeScript
        * https://github.com/angular/angular/issues/5449
      * Example: syntax changes
        * @View and @Template existed in early nG2 betas but were deprecated
        * Template expression syntax used to use "let" instead of "#"
        * Many resources online use old syntax. When in doubt, read the source
      * Example: TSC compilation issues
        * TypeScript compiler is very sensitive about type declaration files
        * Different implementations can give different results (gulp-typescript vs SystemJS)
    * Proceed with caution
  6. TypeScript
    * From Microsoft, a compiled superset of Javascript
    * All valid JS is valid TS (theoretically - in practice often requires tweaking)
    * Adds support for static typing
      * Specify type when declaring vars, function arguments and return values, etc
      * Describe custom types with a "declaration" file - describe interface
    * Adds the common ES6 features
      * arrow functions, classes, modules, let keyword, Map, Promise 
      * Compatibility table: http://kangax.github.io/compat-table/es6/
    * And some unique features
      * @ Decorator syntax (often referred to as annotation)
      * inline variable type specification
    * Tutorial: https://johnpapa.net/typescriptpost1/
    * Quick syntax reference: https://quizlet.com/134674527/typescript-syntax-flash-cards/
  7. Lab: Get started with Angular 2
    * We will follow the quickstart at https://github.com/angular/quickstart/blob/master/README.md
    * Note SystemJS is optional - other module loaders such as Webpack
    * SystemJS is capable of transpiling on the fly (client side) 
      * its not recommended
      * But it is faster than waiting for a watcher to recompile
      * However code will sometimes run in browser when the TSC compiler errors
      * tsc depends more on definition files to provide typing
  8. Components
    * Components are specialized directives. Key features:
      * Component always specifies at least one template (mulitple based on media query)
      * New template syntax
      * ES6 Class with constructor replaces Controller
      * Scope is gone - properties of the ES6 Class now represent Component data
      * Input and Output properties
        * Public API of the Component
        * Binding to Inputs remains familiar
        * Subscribe to events for Output
  8. Basic Component Lab
3. Day 3
  * Component Architecture in nG 2
    * Components consist of...
      * A directives with sensible defaults (i.e., restrict to element)
      * Template 
      * Controller (ES6 Class)
      * An API to communicate outside (Input and Output props)
    * Components have everything they need to be self contained units of code
    * nG2 apps should be made by composing reusable components into new features
  * New template syntax
    * No longer markup-based
    * Use square bracket to bind output: [ngModel]="editingSong.title"
    * Parenthesis subscribe their target to events: (click)="editSong(index)"
    * For forms, nest parens inside brackets to two-way bind
    * Previous format ng-dirname now *ngDirname
    * New iteration syntax "#eachThing of thingsList; #i = index"
    * Reasons for the changes
      * Enables tons of IDE features like autocomplete and refactor
      * Makes the direction of binding obvious from the markup
  * Pipes
    * Pipes arent much more than a new name for filters
    * Async is the exception
      * Binds to the output of an Observable
      * More on those soon
  * nG2 Migration Strategy
    * Component-based architecture can be implemented using nG1.5 Components
    * nG1.5 app following component pattern should convert relatively easily
      * Template syntax conversion is straightforward
      * Component syntax cant be converted, but design pattern stays comparable
      * Many functions will be copypasteable, or small tweaks
      * Services dont change much
    * <1.5 apps not following component style will be total rewrites
  * nG2 Migration Lab
    * Convert our Jukebox UI to nG2
  * [break]
  * Forms and validation
    * ngModel is still available, but forms get a new non-DOM syntax
      * Controls are built from Validators
      * email: new Control("email", Validators.required)
      * ControlGroup built from controls
      * FormBuilder available as sugar for creating the whole kaboodle
    * ngControl
      * Tracks state and validity by creating Control object
      * Applies classes to element based on UI actions:
        * Control visited: ng-touched/ng-untouched
        * Controls value changed: ng-dirty/ng-pristine
        * Controls value valid:  ng-valid/ng-invalid
    * Template reference variables
      * Add #varname as an attribute 
        * References element by default
        * <input #phone placeholder="phone number">
        * (<button (click)="callPhone(phone.value)">Call</button>
      * Or, assign var to form data
        <input ngControl="username"  #name="ngForm" >
        <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
    * Form gotchas
      * nG adds ngForm directive to <form> automatically
      * NgForm, NgModel, NgControlName and NgControlGroup all exportAs "ngForm"
      * ngModel overridden when any other applied to same element
      * ngControl attribute => directive ngControlName (ngControl is abstract)
  * nG2 Forms Lab
    * Convert Playlists UI to nG2 Forms
4. Day 4
  * Observables
    * The observer pattern is a design pattern 
    * Similar to pub-sub events or streams, common within MVC implementations
      * A series of events such as user input
      * A stream of data from a file or web service
      * Web services requests
      * System notifications
    * The "obseravble" or "subject" maintains some state and a list of dependents
    * When state changes, the subject notifies the dependents - "observers"
    * Observers execute whatever arbitrary logic they see fit based on the change 
    * This is excellent for decoupling the event from the code it triggers
    * But it does introduce potential for memory leaks
    * Observer holds a reference to subject, and must be explicitly disposed
  * RxJs Observables in nG 2
    * https://github.com/Reactive-Extensions/RxJS
    * Rx.Observable.from(...
      * array-like, ES6 map, set, generator 
    * filter, map, aggregate, compose
    * Once the stream contains the desired elements, then subscribe
    * Use .subscribe to bind our functions to the stream 
    * Hot and Cold observables
      * Cold :: movies
      * Hot :: live performances
      * Hot replayed :: live performances recorded on video
  * Data Flows
    * SPAs biggest problem is usually dealing with state
    * Example: app setting which many components read and write directly
    * Conflicts arise and reasoning about the parts is painful, maybe impossible
    * One way data flow is critical
      * Component publishes a data update request event
      * Manager hears the event, notifies subscriber(s)
      * Subscribers to update requests (stores/models) react independently
        * Update the data
        * Publish a data updated notification event
      * Manager hears the event, notifies subscriber(s)
      * Subscribers (probably views) react independently
        * Update DOM
  * HTTP in nG 2
    * Http is a built in service
    * Methods: get, post, put, etc
    * Returns an observable containing the response, which then completes
    * Subscribe to the observable like you would resolve a promise
    * Why not a promise like nG 1?
      * Observable is a better pattern for services like Web Workers
      * Standardizing on observable decouples consumers from knowing data mechanism
      * Eventually allows useful features like .retry(5)
    
5. Misc
  * Debugging
    * Must be in dev mode
      * angular.element($0)
      * ng.probe($0)
