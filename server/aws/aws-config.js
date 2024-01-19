const AWS = require('aws-sdk');

AWS.config.region = 'ap-northeast-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:xxxxxxxx-xx-xxxxxx'
});