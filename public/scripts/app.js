'use strict';

console.log('app.js is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'The Decider'
  ),
  React.createElement(
    'p',
    null,
    'This is a p'
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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Brady'
  ),
  React.createElement(
    'p',
    null,
    'age: 23'
  ),
  React.createElement(
    'p',
    null,
    'location: Imperial'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
