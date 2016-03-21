var express = require('express');
var router = express.Router();
var posts = require('./posts');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { posts: posts.all()});
});

/* GET resume page. */
router.get('/resume', function(req, res, next) {
  res.render('resume');
});

// portfolio
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

// portfolio items
router.get('/projects/:name', function(req, res, next){
  res.render('projects/' + req.params.name)
});

// about
router.get('/about', function(req, res, next) {
  res.render('about');
});

// contact
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

// blog
router.get('/blog', function(req, res, next) {
  res.render('blog', { posts: posts.all()} );
});

// blog articles
router.get('/blog/:name', function(req, res, next){
  res.render('blog/post', posts.get(req.params.name));
});


module.exports = router;
