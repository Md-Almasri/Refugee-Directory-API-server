var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

router.get('/', function(req, res, next) {
  res.send('no route available');
});

router.post('/add-organisation', function(req, res, next) {
    AWS.config.update({region:'eu-west-1'});

    // Set response headers to enable CORS (Cross-Origin Resource Sharing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    
      const params = {
        TableName: 'organisations',

        Item: {
          org_id: req.body.id,
          org_name: req.body.name,
          website: req.body.website,
          email: req.body.email,
          createdAt: new Date().getTime(),
        }
      };
    
      dynamoDb.put(params, (error, data) => {
    
        // Return status code 500 on error
        if (error) {
            res.status(500).json({error: error});
        } else {
            res.status(200).json({status: "OK"});
        }
      });
});

router.post('/add-branch', function(req, res, next) {
    console.log(req.body);
    res.send('Received branch');
});

router.post('/add-note', function(req, res, next) {
    console.log(req.body);
    res.send('Received note');
});

module.exports = router;