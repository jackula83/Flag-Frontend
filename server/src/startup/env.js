const dotenv = require('dotenv');
const { dirname } = require('path');
const appDirectory = dirname(require.main.filename);

module.exports = () => {
  dotenv.config({ path: `${appDirectory}/../.env` });
};
