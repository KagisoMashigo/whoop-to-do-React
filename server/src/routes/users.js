const express = require('express');
const router = express.Router();

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser,
    getUsersTodos
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/lists', (req, res) => {
        getUsersTodos()
            .then((usersLists) => {
                // const formattedPosts = getPostsByUsers(usersPosts);
                console.log("TODOS", usersLists);
            })
            .catch((err) => res.json({
                error: console.log(err.message)
            }));
    });

    router.post('/', (req, res) => {

        const {
            username,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, last_name, email, password)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};