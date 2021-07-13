import express from 'express'
import dotenv from 'dotenv';

dotenv.config()
import listEndpoints from 'express-list-endpoints'
import getDatabaseConnection from './models/index.js'
import router from './routes/index.js'


// Initialize
await getDatabaseConnection();

const app = express()
app.use('/api', router) // Use 'api' as base url


console.clear()
const domainUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:5000' : 'http://localhost:5000'
const HOST = process.env.HOST || 'localhost'
app.listen(5000, HOST, () => {

    console.log('Server listening on port 5000')
})
console.table(listEndpoints(app))

