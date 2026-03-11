import app from "./app.js";
import dotenv from "dotenv";
import runMigrations from "../utils/migrationRunner.js";

dotenv.config({
    path:".env"
})

runMigrations();

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
})