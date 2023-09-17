const userCheck = (req, res, next) => {
    const admins = ['Ada', 'Greta', 'Vim', 'Tim'];
    const user = req.query.userName;
    // admins.includes(user)
    // ? next()
    // : res.redirect('/users/login');
    if (admins.includes(user)) {
        next();
    } else {
        return res.render('login', {
            error: 'No tenés privilegios para ingresar',
        });
    }
};

module.exports = userCheck;
