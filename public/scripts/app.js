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

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var user = {
  name: 'Brady',
  age: 18,
  location: 'Imperial'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    ' Age : ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
