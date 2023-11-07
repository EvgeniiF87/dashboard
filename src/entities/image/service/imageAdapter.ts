import type { ImageService } from '../application/port'
import { ImageApi } from '../api'


export const imageAdapter: ImageService = {
      createImage(args) {
          return ImageApi.createImage(args)
      },
      image(id) {
          return ImageApi.image({ id })
      },
      images() {
          return ImageApi.images()
      },
      removeImage(id) {
          return ImageApi.removeImage({ id })
      },
      updateImage(args) {
          return ImageApi.updateImage(args)
      },
}