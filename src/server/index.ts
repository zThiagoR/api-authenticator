import "dotenv/config"
import express, { Request, Response } from "express"
import { router } from "./routes"
const app = express()

app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.send("Ok")
})

app.listen(4000, () => console.log("servidor online"))