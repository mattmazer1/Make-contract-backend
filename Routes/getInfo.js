const express = require("express");
const router = express.Router();
const client = require("../DBconnect");

let address;

router.post("/address", async (req, res) => {
	try {
		let getAddress = req.body;
		address = getAddress.walletAddress;
		res.send(getAddress);
		console.log(address);
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

router.get("/cardinfo", async (req, res) => {
	try {
		let queryInfo = `SELECT * FROM contracts WHERE id = ( SELECT MIN(id) FROM contracts WHERE address_to = '${address}')`;
		const { rows } = await client.query(queryInfo);
		res.send(rows);
		console.log(rows);
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

router.get("/users", async (req, res) => {
	try {
		let queryUser = `SELECT address_to FROM contracts WHERE id = ( SELECT MIN(id) FROM contracts WHERE address_to = '${address}')`;
		const { rows } = await client.query(queryUser);
		res.send(rows);
		console.log(rows);
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

router.get("/userpaid", async (req, res) => {
	try {
		let queryUser = `SELECT paid FROM contracts WHERE id = ( SELECT MIN(id) FROM contracts WHERE address_to = '${address}')`;
		const { rows } = await client.query(queryUser);
		res.send(rows);
		console.log(rows);
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

router.get("/total", async (req, res) => {
	try {
		let queryTotal = `SELECT COUNT(address_to)
		FROM contracts
		WHERE address_to='${address}'`;
		const { rows } = await client.query(queryTotal);
		res.send(rows);
		console.log(rows);
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

module.exports = router;
