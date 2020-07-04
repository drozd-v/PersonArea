import React, { useState, useEffect } from 'react'
import ContactListContainer from './ContactList/ContactListContainer'
import style from './Contacts.module.css'
import iconSearch from '../../assets/images/icon_search.png'

const Contacts = (props) => {
    const [nameContact, setNameContact] = useState('')
    const [tel, setTel] = useState('')
    const [mail, setMail] = useState('') 
    const [search, setSearch] = useState('') 
    const [editableRecord, setEditableRecord] = useState({
        id: null,
        name: null,
        tel: null,
        mail: null,
    })

    const [errorTel, setErrorTel] = useState(true)
    const [errorMail, setErrorMail] = useState(true)

    const nameContactChange = (event) => {
        setNameContact(event.target.value)
    }
    const telChange = (event) => {
        setTel(event.target.value)
    }
    const mailChange = (event) => {
        setMail(event.target.value)
    }
    const searchChange = (event) => {
        setSearch(event.target.value)
    }
    
    useEffect(() => {
        if (!props.contactList.length)
            props.fetchContactList(props.id)
    })

    const addContact = () => {
        let reg = true;
        setErrorMail(true)
        setErrorTel(true)
        if(!(/(^\+7)\(([0-9]{3})\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/).test(tel)){
            setErrorTel(false)
            reg = false
        }
        if (!(/(^[A-Za-z])([\.\_\-]?[A-Za-z\d])*@[a-z]+\.[a-z]+$/).test(mail)){
            setErrorMail(false)
            reg = false
        }
        if (reg){
        const data = {
            name: nameContact,
            tel: tel,
            mail: mail
        }
        props.addContact(props.id, data)}}
    
    const searchContact = () => {
        props.searchContact(props.id, search)
    }

    const handleChange = (obj) => {
        return () => {
            setEditableRecord(obj)
        }
    }
    const editableNameChange = (event) => {
        setEditableRecord({...editableRecord, name: event.target.value})
    }
    const editableTelChange = (event) => {
        setEditableRecord({...editableRecord, tel: event.target.value})
    }
    const editableMailChange = (event) => {
        setEditableRecord({...editableRecord, mail: event.target.value})
    }
    const editContact = ()=>{
        props.editContact(editableRecord)
        setEditableRecord({
            id: null,
            name: null,
            tel: null,
            mail: null,
        })
    }

    const stopEditContact = ()=>{
        setEditableRecord({
            id: null,
            name: null,
            tel: null,
            mail: null,
        })
    }
    return <div className={style.changeFields}>
        {editableRecord.id && (
        <fieldset className={style.changeFieldsFieldset}>
            <legend>Добавить новый контакт</legend>
            <div  className={style.changeFieldsInput}>
                <div className={style.changeFieldsInputItem}>
                    <span>Name:</span> <input type='text' value={editableRecord.name} onChange={editableNameChange}/>
                </div>
                <div className={style.changeFieldsInputItem}>
                    <span className={errorTel || style.changeFieldsInputItemError}>Tel:</span> <input type='text' value={editableRecord.tel} onChange={editableTelChange}/>
                </div>
                <div className={style.changeFieldsInputItem}>
                    <span className={errorMail || style.changeFieldsInputItemError}>Email:</span> <input type='text' value={editableRecord.mail} onChange={editableMailChange}/>
                </div>
            </div>
            <button onClick={editContact}>Изменить</button>
            <button onClick={stopEditContact}>Отмена</button> 
        </fieldset>)
        }
        {!editableRecord.id && (
        <fieldset className={style.changeFieldsFieldset}>
            <legend>Добавить новый контакт</legend>
            <div  className={style.changeFieldsInput}>
                <div className={style.changeFieldsInputItem}>
                    <span>Name:</span> <input type='text' value={nameContact} onChange={nameContactChange} placeholder='Name'/>
                </div>
                <div className={style.changeFieldsInputItem} >
                    <span className={errorTel || style.changeFieldsInputItemError}>Tel:</span> <input type='text' value={tel} onChange={telChange} placeholder='+7(000)-000-00-00'/>
                </div>
                <div className={style.changeFieldsInputItem}>
                    <span className={errorMail || style.changeFieldsInputItemError}>Email:</span> <input type='text' value={mail} onChange={mailChange} placeholder='email'/>
                </div>
            </div>
            <button onClick={addContact}>Добавить</button>
        </fieldset>)}
        <div className={style.searchField}>
                <input type='search' value={search} onChange={searchChange}/>
                <button onClick={searchContact}><img src={iconSearch} alt='Поиск'/></button>
        </div>
        <ContactListContainer contactChange={handleChange}/>
    </div>
}

export default Contacts