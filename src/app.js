class IndecisionApp extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  };
};

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
        Options Here
        <Option />
      </div>
    );
  };
};

class Option extends React.Component{
  render(){
    return (
      <div>
        <p>Single Option Here</p>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));