const app = require('./startup/app');
const centralErrorHandler = require('./helpers/error/centralErrorHandler');
const serverTerminator = require('./utils/serverTerminator');

const { appLogger } = require('./helpers/logger/appLogger');
const { port } = require('./config');

global.server = app.listen(port, () => {
  appLogger.info(`App Started and Listening on port ${port}`);
});

/// TESSSSSSSSTTTT CENTER

const ProductService = require('./services/product.service');

// CategoryService.getAll({ q: 'Agriculture', path: 'Agriculture' }, { path: 1 }).then((res) => console.log(res));
// AuthService.resetPassword('626e5867f9fda75ea0212946', '123456789').then((res) => console.log(res));
// BusinessService.getTopSellers().then((res) => console.log(res));
// ProductService.create({
//   name: 'BableX',
//   categoryId: '626e45d92955c5a5836d2906',
//   ownerId: '626e588ab10f33d57937bee9',
//   unit: 'Piece',
//   unitPrice: 233.4,
//   minUnit: 50,
//   inStock: 200,

// }).then((res) => console.log(res));
// ProductService.getAdProducts().then((res) => console.log(res));
/// TESSSSSSSSSSSSTTT CENTER
//  handle programmer errors (non-operational).
process.on('uncaughtException', (err) => centralErrorHandler(err));

process.on('unhandledRejection', (err) => centralErrorHandler(err));

//  on receiving a terminate signal.
process.on('SIGTERM', () => {
  appLogger.info(`process ${process.pid} received terminate SIGTERM signal exiting...`);
  serverTerminator();
});

//  on receiving an interrupted signal.
process.on('SIGINT', () => {
  appLogger.info(`process ${process.pid} received interrupt SIGINT signal exiting...`);
  serverTerminator();
});
