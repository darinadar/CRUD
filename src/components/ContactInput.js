import React from 'react';
import Contact from './Contact';

class ContactInput extends React. Component{
    constructor(props){
        super(props);

        this.state = {
            input : ''
        };
    }
    addContacts = () => {
        const{input} = this.state
        if(input){
        this.props.addContacts(input);
        this.setState ({input : '' })
        }
    }

    handleEnter = event =>{
       if(event.key === 'Enter') this.addContacts();
    }

    inputChange = event =>{
        this.setState({input: event.target.value})
    }


    render(){
        const  {input} = this.state
        return (
            <div className = "contact-input">
             <input onKeyPress ={this.handleEnter}  onChange = {this.inputChange} value = {input}></input>
             <button onClick = {this.addContacts}>ADD</button>
            </div>
        )
    }
}


export default ContactInput;