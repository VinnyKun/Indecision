import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions= () => {
        this.setState(() => ({options:[]}))
    };

    handleDeleteOptionSingular= (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option) 
        }))
    };

    handlePick= () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const pick= this.state.options[randomNumber];
        this.setState( () => ({selectedOption: pick}) );
    };
    
    handleAddOption= (option) => {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])})
        )
    };

    handleCloseModal= () => {
        this.setState( () => (
            {selectedOption: undefined}
            )
        )
    }

    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)
    
        if (options) {
            this.setState( () => ({options: options}) )
        }  
        } catch (error) {
        //Do nothing at all
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        }
    };

    componentWillUnmount() {
        console.log('componentWillUnmount')
    };

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
        <div>
            <Header subtitle={subtitle}/>
            <div className='container'> 
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <div className='widget'>
                    <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}  
                    />
                    <AddOption 
                    handleAddOption={this.handleAddOption}
                    />
                </div>
            </div>
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleCloseModal={this.handleCloseModal}
            />
        </div>
        )
    };
}

export default IndecisionApp;