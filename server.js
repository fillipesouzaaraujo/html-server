var connect = require('connect');
var serveStatic = require('serve-static');
var rootFolder = '/Users/devjupiter/Desktop/Requisitos Server/src';

connect()
  .use(serveStatic(rootFolder, { 'index': ['index.html', 'index.htm'] }))
  .listen(8888, () => console.log('Server running on 8888...'));