import React from 'react';


const Contact = ({contact,...props}) =>{
const  ActionBtn = () => <div className = "action-btn">{!contact.done ? <p onClick= {props.doneContacts}>✔️</p>:<p onClick = {props.deleteContacts}>❌</p>}</div>


const className = "contact"  + (contact.done ? 'contact-done' : '')
 
    return (
        <div className = {className}>
            <p>{contact.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
}


export default Contact