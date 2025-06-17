const { join } = require('path');

module.exports = {
  cacheDirectory: join(process.cwd(), 'src', '.cache', 'puppeteer'),
};
