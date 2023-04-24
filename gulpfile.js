'use strict'
const { src, dest, watch, parallel } = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const webpack = require('webpack-stream')

const dist = './dist/'
// const dist = "V:/for_programing/ospanel/domains/test";

function styles() {
	return src('./src/sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(cleanCSS({ compatibility: 'ie10' }))
		.pipe(
			autoprefixer(['> 0.5%', 'last 1 versions', 'not dead'], {
				cascade: false,
			})
		)
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(sourcemaps.write('./'))
		.pipe(dest(dist + '/css'))
		.pipe(browserSync.stream())
}

function scripts() {
	return src('./src/js/script.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(dest(dist + '/js'))
		.pipe(browserSync.stream())
}

function html() {
	return src(['./src/*.html'], { base: 'src' })
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest(dist))
}

function bilds() {
	return src(['./src/img/**/*.*', './src/server.php', './src/fonts/**/*.*'], {
		base: 'src',
	}).pipe(dest(dist))
	// .pipe(browserSync.stream());
}

function watching() {
	browserSync.init({
		server: {
			baseDir: './dist',
			notify: false, // Отключаем уведомления
			online: true, //Режим работы: true или false
		},
	})

	watch(['./src/*.html'], html).on('change', browserSync.reload)
	watch(['./src/sass/**/*.scss'], styles)
	watch(['./src/js/**/*.js'], scripts)
	watch(['./src/img/**/*.*', './src/server.php', './src/fonts/**/*.*'], bilds)
}

exports.bilds = bilds
exports.default = parallel(watching, html, styles, scripts, bilds)
