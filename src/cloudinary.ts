const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload
export const uploadImage = async (fileString, format) => {
  try {
    const res = await cloudinary.uploader.upload(
      `data:image/${format};base64,${fileString}`
    );
    return res;
  } catch (e) {}
};