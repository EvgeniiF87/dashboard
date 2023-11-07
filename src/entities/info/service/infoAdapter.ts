import {  InfoService } from "../application"
import { InfoApi } from '../api'


export const infoAdapter: InfoService = {
    createInfo(args) {
        return InfoApi.createInfo(args)
    },
    removeInfo(id) {
        return InfoApi.removeInfo({ id })
    },
    updateInfo(args) {
        return InfoApi.updateInfo(args)
    },
    info(id) {
        return InfoApi.info({ id })
    },
    allInfo() {
        return InfoApi.allInfo()
    },
}