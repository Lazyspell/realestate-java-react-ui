import { IState } from "../../reducers";
import {connect} from "react-redux";
import {logoutAction} from "../../actions/logout-action";
import NavbarComponent from './NavbarComponent';

const mapStateToProps = (state:IState) => {
	return {
		authUser: state.login.authUser,
        // errorMessage: state.logout.errorMessage
	}
}
const mapDispatchToProps = {
    logoutAction
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)
