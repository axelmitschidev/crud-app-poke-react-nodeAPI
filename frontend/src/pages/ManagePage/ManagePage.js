import React from 'react';
import { Navigate } from 'react-router-dom';
import isObjEmpty from '../../utils/isObjEmpty';
import Card from './Card/Card';
import getRandomInt from '../../utils/getRandomInt';
import axios from 'axios';

class ManagePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: false,
			user: {},
		}
	}

	componentDidMount() {
		if (isObjEmpty(this.state.user)) {
			this.setState({ user: this.props.user })
			if (isObjEmpty(this.props.user)) {
				this.setState({redirect: true});
			} else {
				this.setState({redirect: false});
			}
		} else {
			console.log(this.props.user);
		}
	}

	return_to_login = () => {
		this.props.resetUserFunc();
		this.setState({redirect: true});
	}

	get_poke = async () => {
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+getRandomInt(1, 151));
		const user_res = await axios.post('http://localhost:8080/get/poke/'+this.props.user._id, {poke_name: res.data.name, poke_hp: res.data.stats[0].base_stat, poke_attack: res.data.stats[1].base_stat, poke_defence: res.data.stats[2].base_stat, poke_weight: res.data.weight, poke_img: res.data.sprites.front_default});
		this.setState({user: user_res.data});
	}

	delete = async (id) => {
		const new_user = await axios.post(`http://localhost:8080/delete/${this.state.user._id}/poke/${id}`);
		this.setState({user: new_user.data});
	}

	poke_change_name = async (id) => {
		const new_user = await axios.post(`http://localhost:8080/update/${this.state.user._id}/poke/${id}`, {pokename: document.getElementById('save'+id).value});
		this.setState({user: new_user.data});
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to="/login" />
		} else {
			return (
				<>
					<header className="p-3 bg-dark text-white">
						<div className="container d-flex justify-content-between align-items-center">
							<h1 className="h3 mt-1">Pokemon Bag of { this.state.user.username }</h1>
							<a className="btn btn-success" onClick={ this.get_poke }>Get Poke</a>
							<a className="btn btn-success" onClick={ this.return_to_login }>Return to Login</a>
						</div>
					</header>
					<main className="container p-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
						{!isObjEmpty(this.state.user) ? this.state.user.bag.map(p => <Card pokeChangeNameFunc={this.poke_change_name} pokeid={p.poke_id} deleteFunc={this.delete} key={p.poke_name + Date.now() + Math.random()} name={p.poke_name} img={p.poke_img} hp={p.poke_hp} attack={p.poke_attack} defence={p.poke_defence} weight={p.poke_weight} />) : <></>}
					</main>
				</>
			)
		}
	}
}

export default ManagePage