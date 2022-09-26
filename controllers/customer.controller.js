
const get = (req, res) => {
       res.status(200).send('customer')
}

const post = (req, res) => {
       res.status(200).send('post customer')
}

module.exports = {
       get, post
}
