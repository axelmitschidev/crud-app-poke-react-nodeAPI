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

app.post('/user/create', async (req, res) => {
	const user = new UserModel({
		username: 'Axel',
		bag: [
			{
				poke_name: 'Test1'
			},
			{
				poke_name: 'Test2'
			},
			{
				poke_name: 'Test3'
			},
		],
	});
	await user.save();
	res.send('ok');
});

app.post('/user/login', async (req, res) => {
	const user = await UserModel.findOne({ username: req.body.username });
	res.send(user);
})

app.listen(8080, () => {
	console.log('Listen on http://localhost:8080');
});