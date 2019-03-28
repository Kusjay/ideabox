if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://Kusjay:goatmeat123@ds227146.mlab.com:27146/idea-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/ideabox-dev'}
}