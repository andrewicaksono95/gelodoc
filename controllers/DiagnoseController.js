const {Disease, Symptom, DiseaseSymptom} = require("../models");
const { Op } = require("sequelize");

class DiagnoseController {
    static async form(req, res, next) {
        try {
            const symptoms = await Symptom.findAll({
                order: [['name', 'ASC']]
            })
            res.render('diagnoseForm', {symptoms})
        } catch (error) {
            next(error)
        }
    }

    static async result(req, res, next) {
        try {
            const selected = (req.body.symptomIds || []).map(Number)
            if (!selected.length) return res.render('diagnoseResult', {diseases: []})
            
            const pairs = await DiseaseSymptom.findAll({
                where: {symptomId: {[Op.in]: selected}},
                attributes: ['diseaseId']
            })
            
            const count = pairs.reduce((acc, row) => {
                acc[row.diseaseId] = (acc[row.diseaseId] || 0) + 1
                return acc
            }, {})
            const matchedIds = Object.keys(count).filter(id => count[id] === selected.length)

            const diseases = await Disease.findAll({
                where: {id: {[Op.in]: matchedIds}}
            })
            res.render('diagnoseResult', {diseases})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = DiagnoseController