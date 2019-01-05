
const userService = require('../services/userService')

function addRoutesUser(app) {

    app.get('/user', (req, res) => {
        userService.query()
            .then(users => {
                return res.json(users)
            })
            .catch(err => {
                console.log('err:', err);
            })
    })


    app.get(`/user/:userId`, (req, res) => {
        const userId = req.params.userId;
        userService.getById(userId)
            .then(user => res.json(user))
    })

    app.delete('/user/:userId', (req, res) => {
        const userId = req.params.userId;
        userService.remove(userId)
            .then(() => res.end())
    })

    app.put('/user/:userId', (req, res) => {
        const user = req.body;
        userService.update(user)
            .then(user => res.json(user));
    })

    app.post('/user', (req, res) => {
        const user = req.body;
       userService.add(user)
            .then(user => res.json(user));
    })

}
 
module.exports = addRoutesUser

