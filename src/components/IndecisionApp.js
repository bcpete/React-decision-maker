import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  };

  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options) {
        this.setState(() => ({ options }));
        
      }
    }catch (e) {
      //do nothing at all
    }
    
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  };

  componentWillUnmount(){
    console.log('Component will unmount');
  };

  handleAddOption(option){
    if(!option){
      return 'Enter a valid option to add';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'You already have this option in the list';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
  };

  handleDeleteOptions(){
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePickOption(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  render(){
    const subTitle = "A web app for the indecisive";

    return (
      <div>
        <Header subtitle={subTitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePickOption = {this.handlePickOption}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
          hasOptions={this.state.options.length > 0}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  };
};

IndecisionApp.defaultProps = {
  options: []
};