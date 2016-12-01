# Pollster-Instructor

## Release Notes
+ ***NEW*** User can now add and remove quizzes for their class
+ ***NEW*** User can now create a multiple choices style question
+ ***NEW*** User can now edit and delete existing question
+ ***NEW*** User can now easily find any quiz by just typing in the search bar
+ ***NEW*** User can now easily find any class by just typing in the search bar
+ ***NEW*** User can now open a question so their student can respond to it!
+ ***NEW*** User can now access the web app from <a href="https://guarded-oasis-14876.herokuapp.com">HERE<a/>

### Known Bugs
+ ***BUG*** error message because of server error is just lacking, user will definitely confused waiting on spinner that spin indefinitely (due to server error)
+ ***BUG*** editing a question will reset the participation weight to 0
+ ***BUG*** breadcrumb implementation is rather ugly despite spending 2 days trying to implement it. Future page addition almost will definitely break the breadcrumb!
+ ***BUG*** while navigating away from a page will automatically close a question, closing the browser tab/window with a question open may led into an unknown state.
+ ***BUG*** current input validation technique may be proven to be somewhat annoying
+ ***BUG*** since there are no authentication service implemented, there can only be one person using this site at a time, or something weird may occurs

## For Developer
+ This project requires `npm` to build and run, to install `npm` please install <a href="https://nodejs.org/en/">`node.js`</a>

+ If `webpack: command not found` error encountered, try installing `webpack` globally

  `$ npm install --global webpack`

+ If `webpack-dev-server: command not found` error encountered, try installing `webpack-dev-server` globally

  `$ npm install --global webpack-dev-server`

+ Install `Redux DevTools` for Chrome
<a href="https://goo.gl/RQ43VE"><img src="http://chart.apis.google.com/chart?cht=qr&chs=120x120&choe=UTF-8&chld=H|0&chl=https://goo.gl/RQ43VE"/></a>

+ For IntelliJ WebStorm user:
"uncheck File > Settings... > System Settings > Use safe write (save changes to a temporary file first)."

+ Coding style are enforced using `eslint`, rules of the coding style can be found in `.eslintrc` file. To check for code style, type (make sure to install dependencies beforehand)

    `$ eslint --fix`

## Install Dependencies
All the list of dependencies and its version is listed in the `package.json` file. You can install all the required dependencies automatically by typing

  `$ npm install`

## Scripts
run by typing
`$ npm run <scriptname>`

+ `startd`
Run start daemon, will watch source code for changes and perform hot-reload automatically (built files will not be written to disk).
This will run a development server locally.

+ `buildd`
Run build daemon, will watch source code for changes and perform transpilation on change (built files will be saved on the disk).

+ `flowd`
Run flow-type server on the foreground.

+ `clean`
Remove build directory.

+ `build`
Transpile source code and save the built files into disk.

## Building the project for production
You can build this project for production by typing. Note that the `webpack.config.js` is not yet configured for production use.

  `$ webpack --production`

## Hosting
You can host this anywhere that can host static resource files such as Amazon S3 or use the backend server to host this app. 
Although, the server may have to be configured to accept CORS request from the domain in which this application is hosted.

## Contributors
+ Yoel Ivan (yivan3@gatech.edu)
