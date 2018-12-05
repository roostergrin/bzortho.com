const gulp = require('gulp')
const runSequence = require('run-sequence')
const sassLint = require('gulp-sass-lint')

const client = {
  lint: {
    styles: {
      input: []
      // ['src/**/*.{scss,sass}', 'src/**/**/*.{scss,sass}', 'src/**/**/**/*.{scss,sass}', '!src/sass/vendors/*.{scss,sass}', '!src/sass/**/**/*.{scss,sass}', '!src/sass/**/**/**/*.{scss,sass}']
    }
  },
  styles: {
    watch: []
    // ['src/**/*.{sass,scss}', 'src/**/**/*.{scss,sass}', 'src/**/**/**/*.{scss,sass}']
  }
}

gulp.task('default', (done) => {
  runSequence('sasslint', 'watch', done)
})

gulp.task('sasslint', () => {
  return gulp.src(client.lint.styles.input)
    .pipe(sassLint())
    .pipe(sassLint.format())
})

gulp.task('watch', () => {
  gulp.watch(client.styles.watch, ['sasslint'])
})
