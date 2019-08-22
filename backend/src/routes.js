const express = require("express")

const CaptacaoController = require('./controllers/CaptarLeadController')

const routes = express.Router()



routes.post('/captacao', CaptacaoController.accessSheet)


module.exports = routes