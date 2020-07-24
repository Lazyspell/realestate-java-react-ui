import {connect} from 'react-redux';
import {IState} from '../../reducers';
import {UserDetailsComponent} from './UserDetailsComponent';

const mapStateToProps = (state:IState) =>{
	return {

	}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsComponent)
