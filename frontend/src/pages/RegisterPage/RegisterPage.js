import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = async () => {
		await axios.post('http://localhost:8080/user/create');
		this.setState({ redirect: false });
	}

	render() {
		return (
			<div className="border p-5 rounded shadow">
				<h1 className="h3 mb-5 fw-normal">Register New User</h1>
				<div className="form mb-5">
					<input type="text" className="form-control" placeholder="Username"></input>
				</div>
				<Link to='/login'>Already register ?</Link>
				<button className="w-100 btn btn-lg btn-primary p-1" onClick={ this.handleSubmit }>Register</button>
			</div>
		)
	}
}

export default RegisterPage