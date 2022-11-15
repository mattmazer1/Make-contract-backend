require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.use("/get", require("./Routes/getInfo"));
app.use("/post", require("./Routes/postInfo"));
app.use("/getCard", require("./Routes/getInfo"));
app.use("/patch", require("./Routes/patchInfo"));
app.use("/delete", require("./Routes/deleteInfo"));

app.get("/test", (req, res) => {
	res.send("Connected");
});
