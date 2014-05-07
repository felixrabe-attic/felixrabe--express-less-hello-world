# Hello World with Express.js and Less

See https://github.com/felixrabe/express-less-hello-world for the complete code.


## Setup

Start your project - setup:

    mkdir hello-world
    cd hello-world
    echo {} > package.json            # bare minimum package.json
    echo /node_modules/ > .gitignore  # bare minimum .gitignore

Install expressjs and less-middleware:

    npm install --save express less-middleware


## `public/hello/world.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Hello World</title>
  <link rel="stylesheet" href="/assets/styles.css" />
</head>
<body>
  <h1>
    <span class="hello">Hello</span>
    <span class="world">World</span>!
  </h1>
</body>
</html>
```


## `public/assets/styles.less`

```css
@hello: #dd4433;
@world: #66bb33;

.hello {
  color: @hello;
}

.world {
  color: @world;
}
```


## `index.js`

```javascript
#!/usr/bin/env node

var path = require('path');

var express = require('express');
var lessMiddleware = require('less-middleware');

var app = express();
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen('7890', function() {
  console.log('Listening on port %d', server.address().port);
});
```


## Start it up

    node index.js

And then visit [http://localhost:7890/hello/world.html](http://localhost:7890/hello/world.html).
