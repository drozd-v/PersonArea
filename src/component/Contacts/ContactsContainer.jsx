import { connect } from 'react-redux'
import { fetchContactList, addContact, editContact, searchContact } from '../../redux/actions/contactAction'
import Contacts from './Contacts'

const mapStateToProps = (state) => ({
    id: state.auth.id,
    contactList: state.contact.cont
})

const ContactsContainer = connect(mapStateToProps, {fetchContactList, addContact, editContact, searchContact})(Contacts)
export default ContactsContainer