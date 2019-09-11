const initExpress = require('./init/initExpress');
const initRoutes = require('./init/initRoutes');

const app = initExpress();
initRoutes(app);