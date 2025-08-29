require('dotenv').config()
const express = require('express')
const session = require('express-session')
const methodOverride = require('method-override')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SESSION_SECRET || 'kiwkiwkiw',
    resave: false,
    saveUninitialized: false
}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use((req, res, next) => {
    res.locals.role = req.session.role || null;
    res.locals.profileName = req.session.profileName || ''
    next()
})

app.use('/', routes)
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`)
})
