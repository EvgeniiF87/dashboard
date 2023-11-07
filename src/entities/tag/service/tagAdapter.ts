import { TagService } from "../application/port"
import { TagApi } from '../api'

export const tagAdapter: TagService = {
    createEventPlaceTag(args) {
        return TagApi.createEventPlaceTag(args)
    },
    createTag(args) {
      return TagApi.createTag(args)
    },
    eventPlaceTag(id) {
      return TagApi.eventPlaceTag({ id })
    },
    eventPlaceTags() {
      return TagApi.eventPlaceTags()
    },
    removeEventPlaceTag(id) {
      return TagApi.removeEventPlaceTag({ id })
    },
    removeTag(id) {
      return TagApi.removeTag({ id })
    },
    tag(id) {
      return TagApi.tag({ id })
    },
    updateEventPlaceTag(args) {
      return TagApi.updateEventPlaceTag(args)
    },
    updateTag(args) {
      return TagApi.updateTag(args)
    },
}