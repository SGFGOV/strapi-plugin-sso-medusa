<<<<<<< HEAD
'use strict';

const google = require('./google')
const cognito = require('./cognito')
const role = require('./role')
=======
"use strict";

const google = require("./google");
const cognito = require("./cognito");
const medusa = require("./medusa");
const role = require("./role");
>>>>>>> 51e21ca52c565b8551b8e1b91cf62a91a6938f38

module.exports = {
  google,
  cognito,
<<<<<<< HEAD
  role
=======
  medusa,
  role,
>>>>>>> 51e21ca52c565b8551b8e1b91cf62a91a6938f38
};
