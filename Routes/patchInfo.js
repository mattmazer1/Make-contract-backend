const express = require("express");
const router = express.Router();
const client = require("../DBconnect");

router.patch("/paybool", async (req, res) => {
	try {
		let result = req.body;
		let updateInfo = `UPDATE contracts
		SET paid = ${result.bool}
		WHERE id = ( SELECT MIN(id) FROM contracts WHERE address_to = '${result.address}')`;
		const outcome = await client.query(updateInfo);
		res.send("Update was successul");
		console.log("Update was successful");
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

module.exports = router;
