import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
const port = 4444;

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello world");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
