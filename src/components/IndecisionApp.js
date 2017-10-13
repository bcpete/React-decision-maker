import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount = () => {
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

  componentDidUpdate = (prevProps, prevState) =>{
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  };

  componentWillUnmount = () => {
    console.log('Component will unmount');
  };

  handleAddOption = (option) => {
    if(!option){
      return 'Enter a valid option to add';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'You already have this option in the list';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
      options: []
    }));
  };

  render(){
    const subTitle = "A website for the indecisive";

    return (
      <div>
        <Header subtitle={subTitle}/>
        <div className="container">
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
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
          handleDeleteOptions={this.handleDeleteOptions}
        />
      </div>
    );
  };
};

IndecisionApp.defaultProps = {
  options: []
};