// @flow
import {
  ITEMS_UPDATE_ALL,
  ITEMS_UPDATE_ITEM_SCALE,
  ITEMS_UPDATE_ITEM_LEVEL,
  ITEMS_UPDATE_ITEM_RADIUS
} from '../actions/items'

const initialState = {
  items: []
}

const updateItemScale = (items, id, scale) =>
  items.map(item => {
    if (item.id === id) {
      item.scale = scale
    }
    return item
  })

const updateItemLevel = (items, id, min, max) =>
  items.map(item => {
    if (item.id === id) {
      item.frame_min_value = min
      item.frame_max_value = max
    }
    return item
  })

const updateItemRadius = (items, id, radius, xCenter, yCenter) =>
  items.map(item => {
    if (item.id === id) {
      item.radius = radius
      item.xCenter = xCenter
      item.yCenter = yCenter
    }
    return item
  })

const items = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_UPDATE_ALL:
      return {...state, items: action.items}
    case ITEMS_UPDATE_ITEM_SCALE:
      return {...state, items: updateItemScale(state.items, action.id, action.scale)}
    case ITEMS_UPDATE_ITEM_LEVEL:
      return {...state, items: updateItemLevel(state.items, action.id, action.min, action.max)}
    case ITEMS_UPDATE_ITEM_RADIUS:
      return {...state, items: updateItemRadius(state.items, action.id, action.radius, action.xCenter, action.yCenter)}
    default:
      return state
  }
}


export default items