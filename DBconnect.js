require("dotenv").config();
const PORT = 5432;
const { Client } = require("pg");

const client = new Client({
	user: "postgres",
	host: process.env.HOST,
	database: "ContractDB",
	password: process.env.PASSWORD,
	port: PORT,
});

client.connect(function (err) {
	if (err) throw err;
	console.log("DB connected");
});

module.exports = client;
