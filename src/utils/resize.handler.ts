import bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import sharp from 'sharp';

export const resizeImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   console.log(bodyParser);
  console.log('req.file =>', req?.file);

  sharp(req?.file?.path)
    .resize({ width: 512, height: 512, fit: 'cover' })
    //   .toBuffer()
    .toFile(`./src/uploads/_${req?.file?.filename}`)
    .then((data) => {
      // ... do something with data
      console.log('SHARP DATA =>', data);
      return data;
    });

  return next();
};
