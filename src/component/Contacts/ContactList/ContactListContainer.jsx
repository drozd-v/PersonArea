import { connect } from 'react-redux'
import ContactList from './ContactList'
import {deleteContact} from '../../../redux/actions/contactAction'

const mapStateToProps = (state, props) => ({
    contactChange: props.contactChange,
    contactList: state.contact.cont
})

const ContactListContainer = connect(mapStateToProps, {deleteContact})(ContactList)

export default ContactListContainer