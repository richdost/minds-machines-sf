"use strict";

// -------------------------------------------
//   Task: Compile: Vulcanize seed-app element
// -------------------------------------------

const vulcanize = require("gulp-vulcanize");
const htmlMinifier = require("gulp-html-minifier");

module.exports = function (gulp) {
    return function () {
        return gulp.src([
            "public/elements/seed-app/seed-app.html",
            "public/elements/views/*.html"
        ], {base: "public/"})
            .pipe(vulcanize({
                abspath: "",
                excludes: [
                    "public/bower_components/polymer/polymer.html",
                    // Registration error if the next ones are vulcanized
                    "public/bower_components/px-tooltip/px-tooltip.html",
                    "public/bower_components/px-view/px-view.html",
                    "public/bower_components/iron-meta/iron-meta.html",
                    "public/bower_components/iron-iconset-svg/iron-iconset-svg.html",
                    "public/bower_components/iron-icon/iron-icon.html",
                    "public/bower_components/iron-ajax/iron-ajax.html",
                    // "public/bower_components/iron-ajax/iron-request.html",
                    "public/bower_components/neon-animation/neon-animation.html"
                ],
                inlineCSS: true,
                inlineScripts: true
            }))
            .pipe(htmlMinifier({
                removeComments: true,
                minifyJS: true,
                // Side effect on px styles if collapseWhitespace
                collapseWhitespace: false
            }))
            .pipe(gulp.dest("dist/public/"));
    };
};
