module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.render('admin', {
            message: `Hola ${req.query.userName}`,
        });
    },
};
