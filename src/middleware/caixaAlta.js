
const upperCase = (req,res, next) => {
    req.body = req.body.toUpperCase()

    next()
} 

module.exports = upperCase