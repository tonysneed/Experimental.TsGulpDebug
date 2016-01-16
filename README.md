# TypeScript Debugging with Gulp

Demonstrates how to debug TypeScript when JavaScript and 
source maps are generated via a Gulp task.

1. We start with a project that has a `tsconfig.json` file,
   and a tasks.json file that compiles TypeScript to JavaScript.
   
2. Add `gulpfile.js` to the project root with the following content:
  
    ```js
    'use strict';

    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')({ lazy: true });

    /**
     * List the available gulp tasks
     */
    gulp.task('help', $.taskListing.withFilters(/:/));
    gulp.task('default', ['help']);
    ```

3. Run the following commands from the Terminal:

    ```shell
    npm init -y
    npm install --save-dev gulp gulp-load-plugins gulp-task-listing
    ```

4. Execute the command `gulp` from the terminal to see tasks listed.
   You should see the following output:

    ```shell
    Main Tasks
    ------------------------------
        default
        help
    ```

5. Test

6. Run the following command from the Terminal:

    ```shell
    npm install --save-dev gulp-typescript gulp-sourcemaps
    ```
 