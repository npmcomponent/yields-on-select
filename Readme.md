*This repository is a mirror of the [component](http://component.io) module [yields/on-select](http://github.com/yields/on-select). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-on-select`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# on-select

  Invoke a callback on user selection

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/on-select

## Example

```js
var onselect = require('on-select');
var unbind = onselect(el, selected);

function selected(e){
  console.log(e);
  unbind();
}
```

## API

#### onselect(el, fn)

  Invoke `fn(e, str)` when a user selects within `el`.

  `str` is the user selected text.

## License

  MIT
