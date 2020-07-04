import AuthUser from './AuthUser'
import { loginIn } from '../../redux/actions/authAction'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
  
const AuthUserContainer = connect(mapStateToProps, {loginIn})(AuthUser)

export default AuthUserContainer