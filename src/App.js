import React from 'react';
import Contact from './components/Contact';
import ContactInput from './components/ContactInput'

 class App extends React.Component{
   constructor(){
     super()

     this.state = { 
          contacts: [
            {
              id:0,
              title: 'United Airlines',
              done:true
            },
            {
              id:1,
              title: 'Emirates Airlines',
              done:false
            },
            {
              id:2,
              title: 'Qatar Airways',
              done:false
            },
            {
              id:3,
              title: 'Air France',
              done:true
            },
            {
              id:4,
              title: 'Air Manas',
              done:false
            },
            {
              id:5,
              title: 'Royal Jordian Air',
              done:false
            },
            {
              id:6,
              title: 'Delta Airline',
              done:false
            },
         ]
     }
    
   }

   addContacts = contact => {
     this.setState(state =>{
       let { contacts} = state;
       contacts.push({
         id: contacts.length !== 0 ? contact.length : 0,
         title:contact,
         done: false
       })
       return  contacts;
     });
   }

    doneContacts = id =>{
      const index = this.state.contacts.map(contact =>contact.id).indexOf(id)
      this.setState(state =>{
        let {contacts} = state;
        contacts[index].done = true;
        return contacts;
      })
    }


    deleteContacts = id =>{
      const index = this.state.contacts.map(contact =>contact.id).indexOf(id)
      this.setState (state  =>{
        let {contacts} = state;
        delete contacts [index]
        return contacts;
      })
    }


   render(){
     const {contacts} = this.state;
     const activeContacts = contacts.filter(contact => !contact.done);
     const doneContacts = contacts.filter(contact =>contact.done)

     return(
    <div className = "App">
         <h1 className = "top"> Airline List {activeContacts.length} :</h1>
         {[...activeContacts,...doneContacts].map(contact =>(
         <Contact
         doneContacts={() =>this.doneContacts(contact.id)} 
         deleteContacts = {() =>this.deleteContacts(contact.id)}
          contact = {contact} 
          key = {contact.id}></Contact>
         ))}
         <ContactInput addContacts = {this.addContacts}></ContactInput>
       </div>
     )
   }
 }

export default  App

