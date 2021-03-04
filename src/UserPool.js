import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_PbOd9d6Ny',
  ClientId: '57fcm25nv00p9gv4pppb6f8e0q'
};

export default new CognitoUserPool(poolData);
