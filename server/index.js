import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './src/routes/user.js'
import adminRoutes from './src/routes/admin.js'
import teacherRoutes from './src/routes/teacher.js'
import studentRoutes from './src/routes/student.js'
import dbConnect from './src/config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { body } from 'express-validator'

dotenv.config()
const app = express()
dbConnect()

app.use('/*', body('*').trim().escape())

app.use(cors({
        origin: process.env.NODE_ENV === 'production' ? 'https://school-online.app' : 'http://localhost:3000',
        credentials: true,
        preflightContinue: true,
        // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS"
    }))
    // app.options(cors());
app.use(express.json())
app.use(cookieParser())

    app.use('/api/users', userRoutes)
    // app.use('/api/admin', adminRoutes)
    app.use('/api/teacher', teacherRoutes)
    app.use('/api/student', studentRoutes)

const port = process.env.PORT || 5001
app.listen(port, () => console.log('Server is up and running at port: ', port))