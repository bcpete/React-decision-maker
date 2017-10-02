console.log('app.js is running');

var app = {
  title: 'The Decider',
  subtitle: 'Let me choose for you',
  options: ['One', 'Two']
};

var template = ( 
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p> {app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
    <ol>
    <li>First item</li>
    <li>Second item</li>
    </ol>
  </div>
);

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  }
};

var user = {
  name: 'Brady',
  age: 18,
  location: 'Imperial'
};

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age>=18 && <p> Age : {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);