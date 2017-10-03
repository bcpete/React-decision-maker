console.log('app.js is running');

const app = {
  title: 'The Decider',
  subtitle: 'Let me choose for you',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
  const template = ( 
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> {app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>First item</li>
        <li>Second item</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();