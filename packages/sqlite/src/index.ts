import Database, { Database as SQLiteDatabase } from "better-sqlite3";

let db: SQLiteDatabase;

export function createDatabase(name: string) {
  db = new Database(`${name}.db`);
  db.pragma("journal_mode = WAL");
}
