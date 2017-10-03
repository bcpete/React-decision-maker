console.log('app.js is running');

const app = {
  title: 'The Decider',
  subtitle: 'Let me choose for you',
  options: ['One', 'Two']
};

const template = ( 
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

let count = 0;

const addOne = () => {
  console.log('add one');
};

const minusOne = () => {
  console.log('minus one');
};

const reset = () => {
  console.log('reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);