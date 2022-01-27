import React from 'react';
import { Navigate } from 'react-router-dom';

function isObjEmpty(obj) {
	for (var prop in obj) {
	  if (obj.hasOwnProperty(prop)) return false;
	}
  
	return true;
}

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
		console.log('componentDidMount() in ManagePage');
		if (isObjEmpty(this.props.user)) {
			this.setState({redirect: true});
		} else {
			this.setState({redirect: false});
		}
	}

	render() {
		console.log("render() in ManagePage");
		if (this.state.redirect) {
			return <Navigate to="/login" />
		} else {
			return <h1>Connect with { this.props.user.username } </h1>
		}
	}
}

export default ManagePage