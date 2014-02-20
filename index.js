
/**
 * Dependencies
 */

var selected = require('yields-get-selected-text');
var mod = require('bmcmahen-modifier');
var event = require('component-event');
var raf = require('component-raf');

/**
 * Selection
 */

var selection = window.getSelection();

/**
 * Invoke `fn(e)` when a user selects within `el`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(el, fn){
  event.bind(el, 'mouseup', callback);
  event.bind(el, 'keyup', callback);

  function callback(e){
    if (mod(e)) return;
    var id = raf(function(){
      var str = selected();
      if (str) fn(e, str);
      raf.cancel(id);
    });
  }

  return function(){
    event.unbind(el, 'mouseup', callback);
    event.unbind(el, 'keyup', callback);
  }
};
