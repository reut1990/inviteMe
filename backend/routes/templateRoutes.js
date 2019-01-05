const templateService = require('../services/templateService');


function addRoutes(app) {
    app.get('/template', (req, res) => {
        // const filter = req.query;
        // console.log(filter);
        templateService.query()
            .then(templates => {
                return res.json(templates)
            })
            .catch(err => {
                console.log('err:', err);
            })
    })

    app.get('/template/:templateId', (req, res) => {
        const templateId = req.params.templateId;
        templateService.getById(templateId)
            .then(template => res.json(template))
    })

    app.delete('/template/:templateId', (req, res) => {
        const templateId = req.params.templateId;
        templateService.remove(templateId)
            .then(() => res.end())
    })

    app.put('/template/:templateId', (req, res) => {
        const template = req.body;
        templateService.update(template)
            .then(template => res.json(template));
    })

    app.post('/template', (req, res) => {
        const template = req.body;
        templateService.add(template)
            .then(template => res.json(template));
    })


}



module.exports = addRoutes