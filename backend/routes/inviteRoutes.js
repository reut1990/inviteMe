const inviteService = require('../services/inviteService');


function addRoutes(app) {
    app.get('/invite', (req, res) => {
        
        inviteService.query()
            .then(invite => {
                return res.json(invite)
            })
            .catch(err => {
                console.log('err:', err);
            })
    })

    app.get('/invite/:inviteId', (req, res) => {
        const inviteId = req.params.inviteId;
        inviteService.getById(inviteId)
            .then(invite => res.json(invite))
    })

    app.get('/invite/prv/:inviteId', (req, res) => {
        const inviteId = req.params.inviteId;
        inviteService.getById(inviteId)
            .then(invite => res.json(invite))
    })

    app.delete('/invite/:inviteId', (req, res) => {
        const inviteId = req.params.inviteId;
        inviteService.remove(inviteId)
            .then(() => res.end())
    })

    app.put('/invite/:inviteId', (req, res) => {
        const invite = req.body;
        inviteService.update(invite)
            .then(invite => res.json(invite));
    })

    app.post('/invite', (req, res) => {
        const invite = req.body;
        inviteService.add(invite)
            .then(invite => res.json(invite));
    })


}



module.exports = addRoutes