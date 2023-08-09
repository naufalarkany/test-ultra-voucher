require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

async function main() {
    try {
        await client.connect();

        const query = `
      SELECT u.id, u.name, p.name AS parent_name
      FROM users u
      LEFT JOIN users p ON u.parent_id = p.id
      ORDER BY u.id;
    `;

        const result = await client.query(query);
        console.log(result.rows);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.end();
    }
}

main();
