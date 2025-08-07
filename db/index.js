const {Pool} = require('pg');
const config = require('../configs/config');

const pool=  new Pool(config.db);

pool.on('connect', () => {
   console.log('✅ Connected to PostgreSQL');
});


pool.on('error', (err) => {
  console.error('❌ PG Pool Error:', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool: pool,
};