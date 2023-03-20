import ThumbnailModel from '../models/thumbnail.model';

const findAllThumbnails = async () => {
  const allThumbnails = await ThumbnailModel.find();
  return allThumbnails;
};

const findThumbnailByNickname = async (nickname: string) => {
  const allThumbnails = await ThumbnailModel.find({ uploaded_by: nickname });
  return allThumbnails;
};

const saveOneThumbnail = async (thumbnail_url: string, body: any) => {
  const { uploaded_by, name } = body;
  const newThumbnail = await ThumbnailModel.create({
    media: thumbnail_url,
    private: false,
    uploaded_by: uploaded_by,
    name: name || 'Mr. Enigma',
  });
  return newThumbnail;
};

export { findAllThumbnails, saveOneThumbnail, findThumbnailByNickname };
