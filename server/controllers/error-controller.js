function notFound (req, res) {
    res.render('errors/404.hbs');
}

module.exports = {
    notFound
}