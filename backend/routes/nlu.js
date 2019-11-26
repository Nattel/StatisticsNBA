const router = require("express").Router()
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
 version: '2019-07-12',
 authenticator: new IamAuthenticator({
   apikey: 'kOXwTXiPua2qjgdfuAugsQx-ZOP9vpc2XtRb9k_3FLMg',
 }),
 url: 'https://gateway.watsonplatform.net/natural-language-understanding/api',
});

router.get("/analyze/:string", function (req, res) {
  const analyzeParams = {
    'text': req.params.string,
    'features': {
        'entities': {
            'model': '20:48a0e3c7-6884-4971-af72-fd4211c92c9a',
            'mentions': true,
            'limit': 2
        }
    },
    'language': 'en',
   };

  naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    res.status(201).json({
      message: 'NLU search',
      analysisResults: analysisResults
    });
  })
  .catch(err => {
    console.log('error:', err);
  });
})

module.exports = router;
