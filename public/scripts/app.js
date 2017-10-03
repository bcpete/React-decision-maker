'use strict';

console.log('app.js is running');

var app = {
  title: 'The Decider',
  subtitle: 'Let me choose for you',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    ' ',
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'You have no options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'First item'
    ),
    React.createElement(
      'li',
      null,
      'Second item'
    )
  )
);

var count = 0;

var addOne = function addOne() {
  console.log('add one');
};

var minusOne = function minusOne() {
  console.log('minus one');
};

var reset = function reset() {
  console.log('reset');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
