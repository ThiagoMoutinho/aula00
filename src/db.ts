import { Pool } from "pg";

const connectionString = 'postgres://xyclzvrh:GbrAoey9luWhv9igw-1nV-3Lh9Q7_Vwc@motty.db.elephantsql.com/xyclzvrh';

const db = new Pool ({ connectionString });

export default db;