function isLogin(req, res, next) {
    if (!req.session.userId) return res.redirect('/login')
        next()
}

function isAdmin(req, res, next) {
    if (req.session.role !== 'admin') return res.status(403).send('Tidak punya akses')
        next()
}

module.exports = {isLogin, isAdmin}