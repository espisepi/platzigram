var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

//Tarea para procesar y pasar el archivo index.scss a app.css y ponerlo en la
//carpeta public
gulp.task('styles', function () {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
})

//Tarea para pasar todo lo que esta en la carpeta assets a la carpeta public
gulp.task('assets', function() {
    gulp
      .src('assets/*')
      .pipe(gulp.dest('public'));
})

//El array puede ejecutar varias tareas en paralelo pero por ahora
//le diremos que solo ejecute la tarea llamada 'styles'
gulp.task('default', ['styles','assets'])