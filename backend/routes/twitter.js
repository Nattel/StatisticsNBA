const router = require("express").Router()
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'VMhRzrVVKfio9gvWlt3CORT7k',
  consumer_secret: 'v3djCoMKQ9AkATpSxorHiX87Z0Wc4LToi197xh88yHLx0zq5yd',
  access_token_key: '1195036329601576962-e5PnqXA4oBPJ3ZG06zAHtK5YLjILQg',
  access_token_secret: 'cPQv6HLrciS1HpBqXSqik4rO8EiIqiY3DVBLbt4UybgnX'
});

router.get("/search/:tweet", function (req, res) {
  client.get('search/tweets', {q: req.params.tweet, count: 10, lang: 'en', has:'profile_geo', result_type: 'popular'}, function(error, tweets, response) {
    res.status(201).json({
      message: 'Tweets',
      tweets: tweets
    });
  });
})

module.exports = router;
