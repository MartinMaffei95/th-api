import { Schema, model } from 'mongoose';
import { Thumbnail } from '../interfaces/Thumbnail.interface';

const ThumbnailSchema = new Schema<Thumbnail>(
  {
    media: {
      type: String,
      required: true,
    },
    private: {
      type: Boolean,
      default: false,
    },
    uploaded_by: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ThumbnailModel = model('thumbnail', ThumbnailSchema);

export default ThumbnailModel;
