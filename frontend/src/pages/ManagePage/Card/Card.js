const Card = (props) => {
	return (
		<>
			<div className="mb-5 mr-5 d-flex flex-column align-items-center shadow rounded border" style={{width: '18rem'}}>
				<img src={ props.img } style={{width: '120px'}} alt=""/>
				<div className="card-body">
					<h5 className="card-title text-center h3">{ props.name }</h5>
					<ul>
						<li>HP: {props.hp}</li>
						<li>Attack: {props.attack}</li>
						<li>Defence: {props.defence}</li>
						<li>Weight: {props.weight}</li>
					</ul>
					<div className="btn-group float-end">
						<a className="btn btn-danger" onClick={() => {props.deleteFunc(props.pokeid)}}>Delete</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card