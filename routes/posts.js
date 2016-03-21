var marked = require('marked');
var yaml = require('yaml-front-matter');
var fs = require('fs'); //filesystem
var path = require('path');
var _ = require('lodash');


var parse = function(name){
  var file = fs.readFileSync('./posts/' + name + '.md', 'utf-8');
  var meta = yaml.loadFront(file);
  var html = marked(meta.__content);
  return {
    title: meta.title,
    date: meta.date,
    excerpt: meta.excerpt,
    filename: name,
    html: html
  };
};

var files = fs.readdirSync('./posts/');

var all = {};
var list = _.map(files, function(file) {
   var name = path.basename(file, '.md');
   var post = parse(name);
   all[name] = post;
   return post;
});
_.reverse(list);
exports.all = function() {
   return list;
};
exports.get = function(name) {
   return all[name];
}
