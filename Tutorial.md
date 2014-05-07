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
@hello: #996633;
@world: #669933;

.hello {
  color: @hello;
}

.world {
  color: @world;
}
```
