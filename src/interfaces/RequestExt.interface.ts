import { Request } from 'express';

export interface RequestExt extends Request {
  thumbnailData?: string;
}

type userData = {
  uploaded_by: string;
};
