/* global describe, it */

'use strict';

var assert = require('assert'),
    es = require('event-stream'),
    should = require('should'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    PassThrough = require('stream').PassThrough,
    config = require('../_config/project.json'),
    creds = require('../_config/creds'),
    sgc = require('../index');


describe('sass-generate-contents', function() {
    
    it('should emit error on streamed file', function (done) {
        gulp.src([config.src + '/' + config.dirs.styles + '/**/*.scss', config.dirs.partials + '/**/*.scss'], { buffer: false })
        .pipe(sgc(config.src + '/' + config.dirs.styles + '/_main.scss', creds))
        .on('error', function (err) {
          err.message.should.equal('Streaming not supported');
          done();
        });
    });

});