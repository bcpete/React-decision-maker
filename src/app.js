console.log('app.js is running');

var template = ( 
  <div>
    <h1>The Decider</h1>
    <p>This is a p</p>
    <ol>
    <li>First item</li>
    <li>Second item</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Brady</h1>
    <p>age: 23</p>
    <p>location: Imperial</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);