module.exports = {
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    music: (req, res) => {
        res.render('music');
    },
    login: (req, res) => {
        res.render('login');
    },
};
