const express = require("express");
const router = express.Router();
const client = require("../DBconnect");

router.post("/info", async (req, res) => {
	try {
		let info = req.body;
		let values = [
			`${info.creatorAddress}`,
			`${info.receivingAddress}`,
			info.fee,
			`${info.agreement}`,
		];
		let insertInfo = `INSERT INTO contracts(
            address_from, address_to, fee, agreement)
            VALUES ($1,$2,$3,$4)`;
		const outcome = await client.query(insertInfo, values);
		res.send("Post was succsessful");
		console.log("Post was succsessful");
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log(err.message);
	}
});

module.exports = router;
