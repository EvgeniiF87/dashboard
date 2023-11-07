import type { InterestingService } from '../application/port'
import { InterestinApi } from '../api'


export const interestingAdapter: InterestingService = {
  createInterestingCategory(args) {
      return InterestinApi.createInterestingCategory(args)
  },
  createInterestingCategorySelect(args) {
    return InterestinApi.createInterestingCategorySelect(args)
  },
  createInterestingCollection(args) {
    return InterestinApi.createInterestingCollection(args)
  },
  createInterestingCollectionSelection(args) {
    return InterestinApi.createInterestingCollectionSelection(args)
  },
  interestingCategories() {
    return InterestinApi.interestingCategories()
  },
  interestingCategory(id) {
    return InterestinApi.interestingCategory({ id })
  },
  interestingCategorySelect(id) {
    return InterestinApi.interestingCategorySelect({ id })
  },
  interestingCollection(id) {
    return InterestinApi.interestingCollection({ id })
  },
  interestingCollections() {
    return InterestinApi.interestingCollections()
  },
  interestingCollectionsCurrentDay(id) {
    return InterestinApi.interestingCollectionsCurrentDay({ id })
  },
  interestingCollectionSelection(id) {
    return InterestinApi.interestingCollectionSelection({ id })
  },
  interestingCollectionSelections() {
    return InterestinApi.interestingCollectionSelections()
  },
  interestingCollectionsMonth(id) {
    return InterestinApi.interestingCollectionsMonth({ id })
  },
  interestingCollectionsWeek(id) {
    return InterestinApi.interestingCollectionsWeek({ id })
  },
  interestingCollectionsWeekend(id) {
    return InterestinApi.interestingCollectionsWeekend({ id })
  },
  removeInterestingCategory(id) {
    return InterestinApi.removeInterestingCategory({ id })
  }, 
  removeInterestingCategorySelect(id) {
    return InterestinApi.removeInterestingCategorySelect({ id })
  },  
  removeInterestingCollection(id) {
    return InterestinApi.removeInterestingCollection({ id })
  },
  removeInterestingCollectionSelection(id) {
    return InterestinApi.removeInterestingCollectionSelection({ id })
  },
  updateInterestingCategory(args) {
    return InterestinApi.updateInterestingCategory(args)
  },
  updateInterestingCategorySelect(args) {
    return InterestinApi.updateInterestingCategorySelect(args)
  },
  updateInterestingCollection(args) {
    return InterestinApi.updateInterestingCollection(args)
  },
  updateInterestingCollectionSelection(args) {
    return InterestinApi.updateInterestingCollectionSelection(args)
  },

}