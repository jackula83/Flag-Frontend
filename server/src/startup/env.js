const dotenv = require('dotenv');

modules.exports = () => {
  dotenv.config({ path: `${__dirname}/.env` });
};
