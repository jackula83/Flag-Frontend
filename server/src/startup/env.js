const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config({ path: `${__dirname}/.env` });
};
