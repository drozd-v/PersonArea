import { exitIsAuth } from '../../redux/actions/authAction'
import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
  
const HeaderContainer = connect(mapStateToProps, {exitIsAuth})(Header)

export default HeaderContainer