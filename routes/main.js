
exports.get = async (req, res, next) => {
    res.locals.title = '';
    res.render('./main');
};