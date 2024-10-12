module.exports.getLogin = (req, res) => {
    res.render('login', { title: 'Login Page' });
};
module.exports.getRegister = (req, res) => {
    res.render('register', { title: 'Register(Signin) Page' });
};