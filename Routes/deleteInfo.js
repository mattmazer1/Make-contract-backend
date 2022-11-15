const express = require("express");
const router = express.Router();
const client = require("../DBconnect");

router.delete("/userinfo", async (req, res) => {
	try {
		let body = req.body;
		let updateInfo = `DELETE FROM contracts
		WHERE id = ( SELECT MIN(id) FROM contracts WHERE address_to = '${body.address}')`;
		const outcome = await client.query(updateInfo);
		res.send("Deletion was successul");
		console.log("Deletion was successful");
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

module.exports = router;
