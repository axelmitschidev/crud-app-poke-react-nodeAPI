import axios from 'axios';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			error: false
		}
	}

	handleSubmit = async () => {
		const res = await axios.post('http://localhost:8080/user/create', {username: document.getElementById('username').value});
		if (res.data === '') {
			this.setState({ error: true});
		} else {
			this.setState({ redirect: true });
		}
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to='/login'/>
		}
		return (
			<div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
			<div className="border p-5 rounded shadow">
				<h1 className="h3 mb-5 fw-normal">Register New User</h1>
				<div className="form mb-5">
					<input type="text" className="form-control" placeholder="Username" id='username'></input>
					{this.state.error ? <p style={{color: 'red'}}>Error: username already use</p> : <></> }
				</div>
				<Link to='/login'>Already register ?</Link>
				<button className="w-100 btn btn-lg btn-primary p-1" onClick={ this.handleSubmit }>Register</button>
			</div>
			</div>
		)
	}
}

export default RegisterPage