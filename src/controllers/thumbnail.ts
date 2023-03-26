import { Response, Request } from 'express';
import { RequestExt } from '../interfaces/RequestExt.interface';
import {
  findAllThumbnails,
  saveOneThumbnail,
  findThumbnailByNickname,
  findThumbnailById,
  findThumbnailByQuery,
} from '../services/thumbnail.service';
import { handleHttp } from '../utils/error.handler';

const getAllThumbnails = async ({ body }: Request, res: Response) => {
  try {
    const thumbnails = await findAllThumbnails();
    return res.send(thumbnails);
  } catch (e) {
    handleHttp(res, 'ERROR_GETING_THUMBNAIL', e);
  }
};

const getMyThumbnails = async ({ params }: Request, res: Response) => {
  try {
    const { nickname } = params;
    const thumbnails = await findThumbnailByNickname(nickname);
    return res.send(thumbnails);
  } catch (e) {
    handleHttp(res, 'ERROR_GETING_THUMBNAIL', e);
  }
};

const getOneThumbnail = async ({ params }: Request, res: Response) => {
  try {
    const { _id } = params;
    const thumbnails = await findThumbnailById(_id);
    return res.send(thumbnails);
  } catch (e) {
    handleHttp(res, 'ERROR_GETING_THUMBNAIL', e);
  }
};

const getThumbnailByQuery = async ({ query }: Request, res: Response) => {
  try {
    console.log('QUERYYYYY=>>>>>>>>>>', query);
    const thumbnails = await findThumbnailByQuery(query);
    return res.send(thumbnails);
  } catch (e) {
    handleHttp(res, 'ERROR_GETING_THUMBNAIL', e);
  }
};
const uploadThumbail = async (
  { thumbnailData, body }: RequestExt,
  res: Response
) => {
  try {
    if (!thumbnailData) return;
    //thumbnailData contains url of image
    const thumbnail = await saveOneThumbnail(thumbnailData, body);
    return res.send(thumbnail);
  } catch (e) {
    handleHttp(res, 'ERROR_UPLOADING_THUMBNAIL', e);
  }
};

export {
  uploadThumbail,
  getAllThumbnails,
  getMyThumbnails,
  getOneThumbnail,
  getThumbnailByQuery,
};
