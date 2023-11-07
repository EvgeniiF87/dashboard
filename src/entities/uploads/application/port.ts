import { DownLoadInput, DownLoadResponse } from "../DTO/auth-dto";

export interface UploadsService {
  downLoad: (payload: DownLoadInput) => Promise<DownLoadResponse>;
  uploadPreview: (payload: File) => Promise<{ url: string | null }>;
}
