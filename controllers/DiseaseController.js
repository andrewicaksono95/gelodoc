const { Op } = require("sequelize");
const { formatLevel } = require("../helpers/formatter");
const {Disease, Symptom} = require("../models");

class DiseaseController {
    static async list(req, res, next) {
        try {
            const {search, sort} = req.query
            const option = {include: Symptom}
            if (search) option.where = {name: {[Op.iLike]: `${search}`}}
            if(sort) option.order = [['level', sort]]
            const diseases = await Disease.findAll(option) 
            res.render('diseases/list', {diseases, formatLevel})
        } catch (error) {
            next(error)
        }
    }
    
    static async form(req, res, next) {
        try {
            const symptoms = await Symptom.findAll({
                order: [['name', 'ASC']]
            })
            res.render('diseases/form', {symptoms})
        } catch (error) {
                next(error)
        }
    }

    static async add(req, res, next) {
        try {
            const {name, description, level} = req.body
            const symptomIds = Array.isArray(req.body.symptomIds) ? req.body.symptomIds : (req.body.symptomIds ? [req.body.symptomIds] : [])
            const disease = await Disease.create({name, description, level, userId: req.session.userId})
            await disease.setSymptoms(symptomIds)
            res.redirect('/diseases')
        } catch (error) {
                next(error)
        }
    }
}

module.exports = DiseaseController