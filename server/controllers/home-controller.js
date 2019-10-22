function index (req, res, next) {
    const user = req.body;
    res.render('home/index.hbs');
}

function about (req, res, next) {
    const user = req.body;
    res.render('home/about.hbs');
}

module.exports = {
    index,
    about
}