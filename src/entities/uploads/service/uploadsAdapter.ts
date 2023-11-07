import { UploadsApi } from "../api/upload-api";
import { UploadsService } from "../application/port";

export const uploadsAdapter: UploadsService = {
  downLoad(payload) {
    return UploadsApi.download(payload);
  },
  uploadPreview(payload) {
    return UploadsApi.uploadPreview(payload);
  },
};
