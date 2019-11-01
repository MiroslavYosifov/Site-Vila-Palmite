function index (req, res, next) {
    const user = req.user;
    res.render('home/index.hbs');
}

function about (req, res, next) {
    const user = req.user;
    res.render('home/about.hbs');
}


function contacts (req, res, next) {
    const user = req.user;
    res.render('home/contacts.hbs');
}


function price (req, res, next) {
    const user = req.user;
    res.render('home/price.hbs');
}




module.exports = {
    index,
    about,
    contacts,
    price,
}