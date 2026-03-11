import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.resolve("database/nudge.js");

const db = new sqlite3.Database(dbPath, function(error){
    if(error){
        console.log("Database fail to connect", error);
    }
    else{
        console.log("Database connected successfully")
    }
    
}
)

export default db;