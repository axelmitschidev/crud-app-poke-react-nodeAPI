const express = require('express');
require('./services/dbconnexion');
const UserModel = require('./models/UserModel');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/users', async (req, res) => {
	res.send(await UserModel.find());
});

app.get('/user/:id', async (req, res) => {
	const user = await UserModel.findOne({ _id: req.params.id });
	res.send(user);
});

app.post('/user/create', async (req, res) => {
	const username = await req.body.username;
	const user = await UserModel.findOne({ username: username });
	if (user === null && username !== '') {
		const user = new UserModel({
			username: username,
			bag: [],
		});
		await user.save();
		res.send('ok');
	} else {
		res.send('');
	}
});

app.post('/get/poke/:id', async (req, res) => {
	const body = await req.body;
	const user = await UserModel.findOne({ _id: req.params.id });
	user.bag.push({
		poke_id: Date.now(),
		poke_name: body.poke_name,
		poke_hp: body.poke_hp,
		poke_attack: body.poke_attack,
		poke_defence: body.poke_defence,
		poke_weight: body.poke_weight,
		poke_img: body.poke_img
	})

	if (user.bag.length === 18 * 1) user.badges.push('badge roche')
	if (user.bag.length === 18 * 2) user.badges.push('badge cascade')
	if (user.bag.length === 18 * 3) user.badges.push('badge foudre')
	if (user.bag.length === 18 * 4) user.badges.push('badge prisme')
	if (user.bag.length === 18 * 5) user.badges.push('badge âme')
	if (user.bag.length === 18 * 6) user.badges.push('badge marais')
	if (user.bag.length === 18 * 7) user.badges.push('badge volcan')
	if (user.bag.length === 18 * 8) user.badges.push('badge terre')
	
	await user.save();
	res.send(user);
})

app.post('/user/login', async (req, res) => {
	const user = await UserModel.findOne({ username: req.body.username });
	res.send(user);
})

app.post('/delete/:userid/poke/:id', async (req, res) => {
	const user = await UserModel.findOne({ _id: req.params.userid });
	const index = user.bag.findIndex(poke => poke.poke_id == req.params.id);
	user.bag.splice(index, 1);
	await user.save();
	res.send(user);
})

app.put('/update/:userid/poke/:id', async (req, res) => {
	let user = await UserModel.findOne({ _id: req.params.userid });
	const pokename = await req.body.pokename;
	const index = user.bag.findIndex(poke => poke.poke_id == req.params.id);
	user.bag[index].poke_name = pokename;
	await UserModel.findOneAndUpdate({_id: req.params.userid }, { bag: user.bag });
	res.send(user);
})

app.listen(8080, () => {
	console.log('Listen on http://localhost:8080');
});