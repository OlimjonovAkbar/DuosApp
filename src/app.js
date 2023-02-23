import express from 'express';
import dotenv from 'dotenv';
import exhbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import authMiddleware from './middleware/auth.middleware.js';


// import routes 
import authRoute from './routes/auth.routes.js'
import dashboardRoute from './routes/dashboard.routes.js'


// app setup
const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

// engine config
const hbs = exhbs.create({
    layoutsDir: 'views/layouts',
    layout: 'layout',
    extname: 'hbs',
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true
    }
  })
  
// view engine setup
app.set('views', 'views');
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');


// static dir
app.use(express.static('public'));


// endpoints
app.use('/', authRoute)
app.use(authMiddleware)
app.use('/dashboard', dashboardRoute)


// app listen 
app.listen(process.env.PORT, () => console.log(`> Server worked on http://localhost:${process.env.PORT}`))
