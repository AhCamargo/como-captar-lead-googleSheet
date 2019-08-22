
const GoogleSpreadSheet = require('google-spreadsheet')
const { promisify } = require('util')
const credentials = require('../config/credentials.json')
const docId = '1jfQ7h2LuHF6qqwINbvBmdQadnM3oTpRwjcNwFO51kMg'




module.exports = {
    async accessSheet(req, res) {
        
        const doc = new GoogleSpreadSheet(docId)
        await promisify(doc.useServiceAccountAuth)(credentials)

        const info = await promisify(doc.getInfo)()
        const worksheet = info.worksheets[0]
         
         try {
            const captacao = await promisify(worksheet.addRow)(req.body)

            return res.json(captacao) 

         } catch (error) {
             
             return res.status(400).send({ error: 'Falha no registro'})
         }
         
    }

}