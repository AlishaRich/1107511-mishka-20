const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
// const minify = require("gulp-csso");
// const rename = require("gulp-rename");
const sync = require("browser-sync").create();
// const imagemin = require("gulp-imagemin");
// const webp = require("gulp-webp");
// const svgstore = require("gulp-svgstore");
// const del = require("del");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    // .pipe(minify())
    // .pipe(rename("style.min.css"))
    // .pipe(sourcemap.write("."))
    // .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// const html = () => {
//   return gulp.src("source/*.html")
//     .pipe(gulp.dest("build"));
// }
//
// exports.html = html;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "source"  // baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);

// const images = () => {
//   return gulp.src("source/img/**/*.{png,jpg,svg}")
//     .pipe(imagemin ([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.mozjpeg({progressive: true}),
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("build/img"));
// }
//
// exports.images = images;
//
//
// const convertWebp = () => {
//   return gulp.src("source/img/**/*.{png,jpg}")
//     .pipe(webp({quality: 90}))
//     .pipe(gulp.dest("build/img"));
// }
//
// exports.webp = convertWebp;
//
// const sprite = () => {
//   return gulp.src("source/img/sprite-*.svg")
//     .pipe(svgstore({inlineSvg: true}))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img"));
// }
//
// exports.sprite = sprite;
//
// const copy = () => {
//   return gulp.src([
//     "source/fonts/**/*.{woff,woff2}",
//     "source/img/**",
//     "source/js/**"
//   ], {
//     base: "source"
//   })
//   .pipe(gulp.dest("build"));
// }
//
// exports.copy = copy;
//
// const clean = () => {
//   return del("build");
// }
//
// exports.clean = clean;
//
// exports.build = gulp.series(
//   clean, copy, styles, images, convertWebp, sprite, html
// );
