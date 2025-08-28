const { formatLevel } = require("../helpers/formatter");
const {Disease, Symptom, User, Profile} = require("../models");


class LandingController {
    static async show(req, res, next) {
        try {
            const profile = await Profile.findOne({
                where: {userId: req.session.userId}
            })
            const diseases = await Disease.findAll({
                include: [
                    Symptom,
                    {model: User, include: [Profile]},
                ],
                order: [['name', 'ASC']]
            })
            res.render('landing', {
                profileName: profile ? profile.name : 'Pengguna',
                diseases,
                formatLevel
            })
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = LandingController
