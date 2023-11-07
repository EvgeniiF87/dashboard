import type { CostService } from '../application/port'
import { CostApi } from '../api'


export const costAdapter: CostService = {
    createCostOption(args) {
        return CostApi.createCostOption(args)
    },
    createEventPlaceCostOption(args) {
        return CostApi.createEventPlaceCostOption(args)
    },
    eventPlaceCostOption(id) {
        return CostApi.eventPlaceCostOption({ id })
    },
    eventPlaceCostOptions() {
        return CostApi.eventPlaceCostOptions()
    },
    removeCostOption(id) {
        return CostApi.removeCostOption({ id })
    },
    removeEventPlaceCostOption(id) {
        return CostApi.removeEventPlaceCostOption({ id })
    },
    updateEventPlaceCostOption(args) {
        return CostApi.updateEventPlaceCostOption(args)
    },
}