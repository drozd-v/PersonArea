import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'

const mapStateToProps = (state, props) => {
    return {
    Component: props.component,
    path: props.path,
    redirect: props.redirect,
    isAuth: state.auth.isAuth
    }
}

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute)
export default PrivateRouteContainer