var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var	postCss = require('gulp-postcss');
var	autoprefixer = require('autoprefixer');
var	concat = require('gulp-concat');
var sourceMaps = require('gulp-sourcemaps');
var gcmq = require('gulp-group-css-media-queries');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

gulp.task("vendor-css", function(){
	return gulp.src('./css/**/*.css')
	.pipe(cleanCss())
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('../assets/css/'))
  .pipe(notify("Ha terminado la tarea css"));
});

gulp.task('screen', function(){
	var processors = [
	autoprefixer({browsers: ['last 2 versions'] })
	];

	return gulp.src('./screen/screen.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(sourceMaps.init())
	.pipe(postCss(processors))
	.pipe(gcmq())
	.pipe(cleanCss())
	.pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('../assets/css/'))
	.pipe(notify("Ha finalizado la tarea screen"));
});

//Comprimir archivos js
gulp.task('js', function () {
   return gulp.src(['./js/jquery.fitvids.js', './js/jquery.ghostHunter.min.js', './js/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../assets/js/'))
    .pipe(notify("Ha finalizado la tarea js"));
});

//Comprimir archivos js
gulp.task('vendor-post', function () {
   return gulp.src(['./js-post/*js'])
    .pipe(concat('vendor.post.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../assets/js/'))
    .pipe(notify("Ha finalizado la tarea vendor-post"));
});

//Comprimir imagenes
gulp.task('images', function() {
  gulp.src('./images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./images-compress'))
    .pipe(notify("Ha finalizado la compresión de imágenes!"));;
});

gulp.task('style', function(){
	var processors = [
	autoprefixer({browsers: ['last 2 versions'] })
	];

	return gulp.src('./style/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(sourceMaps.init())
	.pipe(postCss(processors))
	.pipe(gcmq())
	.pipe(cleanCss())
	.pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('../assets/css/'))
	.pipe(notify("Ha finalizado la tarea style"));
});

gulp.task('watch', function(){
	gulp.watch('./screen/**/*', ['screen']);
	gulp.watch('./style/**/*', ['style']);
	gulp.watch('./css/**/*', ['vendor-css']);
	gulp.watch('./js/**/*', ['js']);
	gulp.watch('./js-post/**/*', ['vendor-post']);
	gulp.watch('./images/**/*', ['images']);
});

gulp.task('default', ['watch', 'screen', 'style', 'vendor-css', 'js', 'vendor-post', 'images']);