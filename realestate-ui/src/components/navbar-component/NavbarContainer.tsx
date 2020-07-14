import { IState } from "../../reducers";
import {connect} from "react-redux";
import {login} from "../../actions/login-action";
import NavbarComponent from './NavbarComponent';

const mapStateToProps = (state:IState) => {
	return {
		currentUser: state.userState.currentUser
	}
}
const mapDispatchToProps = {
	login
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)
