import path from "path";
import fs from "fs";
import db from "../config/db.js";

function runMigrations() {
  const migrationsPath = path.resolve("database_migrations");
  const arrayOfMigrations = fs.readdirSync(migrationsPath);

  arrayOfMigrations.forEach((migration) => {
    const sql = fs.readFileSync(
      path.join(migrationsPath, migration), "utf-8"
    );
    db.exec(sql, (error)=> {
      if (error) {
        console.error("Error opening the migration file: ", error);
      } else {
        console.log("migration loaded");
      }
    });
  });
}

export default runMigrations;
