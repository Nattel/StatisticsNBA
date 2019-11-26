const router = require("express").Router()
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'Jb8fynDoWoAWGll34zX31ATam',
  consumer_secret: 'AEleNi28PBGBr2tRG0n6ADlgXChamSA0cHW5r94IRzW2gwHyUT',
  access_token_key: '863927629828829185-hIFsiE2dPhGhw7hiPOA7dBYAMGEuqB0',
  access_token_secret: 'WGjupspqshFX4wLQ3EbVt7DI7ERUhg0WCzC6v2MbUFYwk'
});

router.get("/search/:tweet", function (req, res) {
  client.get('search/tweets', {q: req.params.tweet, count: 10, lang: 'en', has:'profile_geo', result_type: 'popular'}, function(error, tweets, response) {
    res.status(201).json({
      message: 'Tweets',
      tweets: tweets
    });
  });
})

module.exports = router
