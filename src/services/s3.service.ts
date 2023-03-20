import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_THUBNAIL_URI,
} from '../config/config';

const client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID as string,
    secretAccessKey: AWS_SECRET_ACCESS_KEY as string,
  },
});

export const s3Upload = async (file: any, fileExtension: any) => {
  const fileName = `${Date.now()}-thumbnail.${fileExtension}`;
  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Key: fileName,
    Body: file.buffer,
  };
  const command = new PutObjectCommand(uploadParams);

  const res = await client.send(command);
  console.log({
    response: res,
    thumbnail_url: `${AWS_THUBNAIL_URI}${fileName}`,
  });
  return {
    response: res,
    thumbnail_url: `${AWS_THUBNAIL_URI}${fileName}`,
  };
};
