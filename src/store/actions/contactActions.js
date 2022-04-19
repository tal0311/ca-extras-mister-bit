import { contactService } from './../../service/contactService'

export function loadContacts() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().contactModule
      
      const contacts = await contactService.getContacts(filterBy)
      dispatch({ type: 'SET_CONTACTS', contacts })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function removeRobot(robotId) {
  return async (dispatch) => {
    try {
      await contactService.remove(robotId)
      dispatch({ type: 'REMOVE_ROBOT', robotId })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}
