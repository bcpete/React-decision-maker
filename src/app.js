console.log('app.js is running');

var app = {
  title: 'The Decider',
  subtitle: 'Let me choose for you'
};

var template = ( 
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
    <li>First item</li>
    <li>Second item</li>
    </ol>
  </div>
);

var user = {
  name: 'Brady',
  age: 23,
  location: 'Imperial'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);