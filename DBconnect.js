require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
	user: "postgres",
	host: process.env.HOST,
	database: "postgres",
	password: process.env.PASSWORD,
	port: 5432,
});

client.connect(function (err) {
	if (err) throw err;
	console.log("DB connected");
});

module.exports = client;
