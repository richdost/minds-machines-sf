'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const imsMiddleware = require('ims-service-utils').imsMiddleware;
const path = require('path');

const props = {
  predixZoneId: process.env.IMS_PREDIX_ZONE_ID,
  subtenantId: process.env.IMS_SUBTENANT_ID,
  clientId: process.env.IMS_CLIENT_ID,
  clientSecret: process.env.IMS_CLIENT_SECRET,
  uaaInstanceId: process.env.IMS_UAA_INSTANCE_ID
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', imsMiddleware(props));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});