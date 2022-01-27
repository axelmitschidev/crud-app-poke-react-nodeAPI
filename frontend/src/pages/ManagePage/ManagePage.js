import React from 'react';
import { Navigate } from 'react-router-dom';
import isObjEmpty from '../../utils/isObjEmpty';

class ManagePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {},
			redirect: false
		}
	}

	componentDidMount() {
		this.setState({ user: this.props.user })
		if (isObjEmpty(this.props.user)) {
			this.setState({redirect: true});
		} else {
			this.setState({redirect: false});
		}
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to="/login" />
		} else {
			return (
				<>
					<h1>Manage</h1>
					<p>Username: {this.props.user.username}</p>
					<p>UserID: {this.props.user._id}</p>
				</>
			)
		}
	}
}

export default ManagePage