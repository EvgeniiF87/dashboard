import { createAppThunk } from "../../../shared";
import { uploadsAdapter } from "../service";


export const fetchUploadPreview = createAppThunk(
  "upload/fetchUploadPreview",
  async (payload: File , { rejectWithValue }) => {

    const response = await uploadsAdapter.uploadPreview(payload);
    
    if (!response.url) {
      return rejectWithValue(
        `Failed upload preview`
      );
    }

    return response.url;
  }
);
