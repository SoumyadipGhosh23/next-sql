import mysql from 'mysql2/promise'

async function  executeQuery(query,data) {
  try {
    const db = await mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        database : 'demo-nextjs',
        user: 'root',
        password: 'Soumyadip@1234#45678'
    })
    const [result] = await db.execute(query, data)
    await db.end()
    console.log(result);
    return result
  } catch (error) {
    console.log("Connection error",error);
  }
}

export default executeQuery