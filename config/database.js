if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://kusjay:goatmeat123@ds127646.mlab.com:27646/idea-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/ideabox-dev'}
}