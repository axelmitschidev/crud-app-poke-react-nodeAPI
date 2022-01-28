import React from "react"

class Card extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			updating: false
		}
	}

	updating = () => {
		this.setState({updating: true});
	}

	cancel_updating = () => {
		this.setState({updating: false});
	}

	save = () => {
		console.log('save');
	}

	render() {
		if (this.state.updating) {
			return (
				<>
					<div className="mb-5 mr-5 d-flex flex-column align-items-center shadow rounded border" style={{width: '18rem'}}>
						<img src={ this.props.img } style={{width: '120px'}} alt=""/>
						<div className="card-body d-flex justify-content-center flex-column">
							<h5 className="card-title text-center h3">{ this.props.name }</h5>
							<input type="text" placeholder="New name" className="m-2" />
							<div className="btn-group float-end">
								<a onClick={this.save} className="btn btn-primary">Save</a>
								<a className="btn btn-danger" onClick={this.cancel_updating}>Cancel</a>
							</div>
						</div>
					</div>
				</>
			)
		} else {
			return (
				<>
					<div className="mb-5 mr-5 d-flex flex-column align-items-center shadow rounded border" style={{width: '18rem'}}>
						<img src={ this.props.img } style={{width: '120px'}} alt=""/>
						<div className="card-body">
							<h5 className="card-title text-center h3">{ this.props.name }</h5>
							<ul>
								<li>HP: {this.props.hp}</li>
								<li>Attack: {this.props.attack}</li>
								<li>Defence: {this.props.defence}</li>
								<li>Weight: {this.props.weight}</li>
							</ul>
							<div className="btn-group float-end">
								<a onClick={this.updating} className="btn btn-primary">Update</a>
								<a className="btn btn-danger" onClick={() => {this.props.deleteFunc(this.props.pokeid)}}>Delete</a>
							</div>
						</div>
					</div>
				</>
			)
		}
	}
}

export default Card