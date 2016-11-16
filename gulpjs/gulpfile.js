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

gulp.task('sass', function(){
	var processors = [
		autoprefixer({browsers: ['last 2 versions'] })
	];
	return gulp.src('./sass/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(sourceMaps.init())
	.pipe(postCss(processors))
	.pipe(gcmq())
	.pipe(cleanCss())
	.pipe(concat('styles.css'))
	.pipe(sourceMaps.write('.'))
	.pipe(gulp.dest('../assets/css/'))
	.pipe(notify("Ha terminado la tarea sass"));
});

gulp.task("css", function(){
	return gulp.src('./css/**/*.css')
	.pipe(cleanCss())
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('../assets/css/'))
  .pipe(notify("Ha terminado la tarea css"));
});

gulp.task('style', function(){
	var processors = [
	autoprefixer({browsers: ['last 2 versions'] })
	];

	return gulp.src('./style/estilo.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postCss(processors))
	.pipe(gcmq())
	//.pipe(cleanCss())
  .pipe(gulp.dest('../assets/css/'))
	.pipe(notify("Ha finalizado la tarea style"));
});

//Comprimir archivos js
gulp.task('js', function () {
   return gulp.src(['./js/jquery.ghostHunter.min.js', './js/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../assets/js/'))
    .pipe(notify("Ha finalizado la tarea js"));
});

gulp.task('watch', function(){
	gulp.watch('./sass/**/*', ['sass']);
	gulp.watch('./style/**/*', ['style']);
	gulp.watch('./css/**/*', ['css']);
	gulp.watch('./js/**/*', ['js']);
});


gulp.task('default', ['watch', 'sass', 'css', 'style', 'js']);