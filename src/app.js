class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  };

  handleAddOption(option){
    if(!option){
      return 'Enter a valid option to add';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'You already have this option in the list';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  };

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handlePickOption(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render(){
    const title = "The Decider";
    const subTitle = "A web app for the indecisive";

    return (
      <div>
        <Header title={title} subtitle={subTitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePickOption = {this.handlePickOption}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
          hasOptions={this.state.options.length > 0}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  };
};

class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  };

};

class Action extends React.Component{
  render(){
    return (
      <div>
        <button 
          onClick={this.props.handlePickOption}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  };
};

class Options extends React.Component{
  render(){
    return (
      <div>
      <button 
        onClick={this.props.handleDeleteOptions}
        disabled={!this.props.hasOptions}
      >
        Remove All
      </button>
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }
      </div>
    );
  };
};

class Option extends React.Component{
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  };
};

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  };

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
    
  };

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  };
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));