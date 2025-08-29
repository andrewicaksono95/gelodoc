const {User, Profile} = require("../models");

class AuthController {
    static loginForm(req, res) {res.render('login')}
    static registerForm(req,res) {res.render('register')}

    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {email}
            })
            if (!user || !user.checkPassword(password)) 
                return res.send('Email atau password salah')
            req.session.userId = user.id
            req.session.role = user.role
            req.session.profileName = user.Profile?.name || ''

            res.redirect('/')
        } catch (error) {
            next(error)
        }
    }
        
    static async register(req, res, next) {
        try {
            const {name, email, password, role, phone, address} = req.body
            const newUser = await User.create({email, password, role: role || 'user'})
            await Profile.create({
                name,
                phone,
                address,
                userId: newUser.id
            })

            res.redirect('/login')
        } catch (error) {
                next(error)
        }
    }

    static logout(req, res) {req.session.destroy(() => res.redirect('/login'))}
}

module.exports = AuthController