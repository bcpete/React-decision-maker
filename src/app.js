class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>The Decider</h1>
        <h2>For the indecisive</h2>
      </div>
    );
  };

};

class Action extends React.Component{
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  };
};

class Options extends React.Component{
  render(){
    return (
      <div>
        Some Options Here
      </div>
    );
  };
};

class AddOption extends React.Component{
  render(){
    return (
      <div>
        <input type="text" name="option" />
        <button>Add Option</button>
      </div>
    )
  };
};

const jsx = (
  
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>

);

ReactDOM.render(jsx, document.getElementById('app'));