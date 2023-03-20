import { RequestExt } from './../interfaces/RequestExt.interface';
import { NextFunction, Request, Response } from 'express';
import { handleHttp } from '../utils/error.handler';
import { s3Upload } from '../services/s3.service';

export const uploadImage = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const { file } = req;
    if (!file) return handleHttp(res, 'no file');

    const fileFormat = file.mimetype.split('/')[1];
    const upS3 = await s3Upload(req?.file, fileFormat);
    console.log(upS3);
    req.thumbnailData = upS3.thumbnail_url;
    next();
  } catch (error) {
    handleHttp(res, 'ERROR_cloudinary_THUMBNAIL');
    // return;
  }
};
