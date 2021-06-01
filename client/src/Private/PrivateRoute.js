import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = props => {
    const { token } = useSelector(state => state.authReducer)
    return token
        ?
        <Route path={props.path} exact={props.exact} component={props.component} />
        :
        <Redirect to='/' />

}

export default PrivateRoute;