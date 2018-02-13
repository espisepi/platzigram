var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles', function () {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
})

//El array puede ejecutar varias tareas en paralelo pero por ahora
//le diremos que solo ejecute la tarea llamada 'styles'
gulp.task('default', ['styles'])