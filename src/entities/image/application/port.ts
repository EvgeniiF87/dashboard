import { CustomError } from "../../../shared";
import { ImageModel } from "../domain";
import { CreateImageInput, UpdateImageInput } from "../DTO/image-dto";


export interface ImageService {
  createImage: (args: CreateImageInput) => Promise<{ data: {createImage: ImageModel } } | CustomError>;
  removeImage: (id: number) => Promise<{ data: {removeImage: ImageModel } } | CustomError>;
  updateImage: (args: UpdateImageInput) => Promise<{ data: {updateImage: ImageModel } } | CustomError>;
  image: (id: number) => Promise<{ data: {image: ImageModel } } | CustomError>;
  images: () => Promise<{ data: {images: ImageModel[] } } | CustomError>;
}