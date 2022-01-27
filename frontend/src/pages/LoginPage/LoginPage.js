import React from 'react';
import { Link, Navigate } from 'react-router-dom';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}
	}

	handleSubmit = async () => {
		this.props.userLoginFunc();
		this.setState({redirect: true});
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to='/manage' />
		}
		return (
			<div className="border p-5 rounded shadow">
				<h1 className="h3 mb-5 fw-normal">Login your user</h1>
				<div className="form mb-5">
					<input id='username' type="text" className="form-control" placeholder="Username"></input>
				</div>
				<Link to='/register'>Need to register ?</Link>
				<button className="w-100 btn btn-lg btn-primary p-1" onClick={ this.handleSubmit }>Login</button>
			</div>
		)
	}
}

export default LoginPage