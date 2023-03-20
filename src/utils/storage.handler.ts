import multer from 'multer';
import * as path from 'path';

const storage = multer.diskStorage({
  destination: (req: any, file: any, callback: any) => {
    callback(null, './src/uploads');
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, `${Date.now()}-thumbnail.png`);
  },
});
const limits = {
  fileSize: 11000000, // => 11Mb
  files: 1,
};
const uploadMiddleware = multer({
  storage,
  limits,
  fileFilter: (req, file, cb) => {
    const fileTypes = /png|jpeg/;
    const mimeType = fileTypes.test(file.mimetype);
    const extType = fileTypes.test(path.extname(file.originalname));
    // Validate image extension
    if (mimeType && extType) {
      return cb(null, true);
    }
    return cb(Error('El formato del texto es invalido'));
  },
});

export { uploadMiddleware };
