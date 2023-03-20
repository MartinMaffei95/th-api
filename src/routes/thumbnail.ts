import { Router } from 'express';
import {
  uploadThumbail,
  getAllThumbnails,
  getMyThumbnails,
} from '../controllers/thumbnail';
import { uploadImage } from '../middlewares/uploadMiddleware';
import { upload } from '../services/upload.service';
import { resizeImage } from '../utils/resize.handler';
import { uploadMiddleware } from '../utils/storage.handler';

const router = Router();

router.get('/', getAllThumbnails);
router.get('/:nickname', getMyThumbnails);

router.post(
  '/',
  upload.single('thumbnail'),
  uploadImage, // Here create
  uploadThumbail
);

export { router };
