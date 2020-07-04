import React from 'react'
import style from './ContactList.module.css'

const ContactList = (props) => {
    const deleteContact = (userId, id) => {
        props.deleteContact(userId, id)
    }

    return <>
        <div className={style.contactListTable}>
            <span>Список контактов</span>
            <span>Name</span>
            <span>Tel</span>
            <span>Email</span>
        </div>
        {props.contactList.map(item => <div key={item.id} className={style.contactList}>
            <button onClick={() => deleteContact(item.userId, item.id)}>Удалить</button>
            <button onClick={props.contactChange(item)}>Изменить</button>
            <span>{item.name}</span>
            <span>{item.tel}</span>
            <span>{item.mail}</span>
        </div>)}
        
    </>
}

export default ContactList