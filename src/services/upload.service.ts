import { handleHttp } from '../utils/error.handler';

const multer = require('multer');

const memoryStorage = multer.memoryStorage();
export const upload = multer({
  storage: memoryStorage,
});
